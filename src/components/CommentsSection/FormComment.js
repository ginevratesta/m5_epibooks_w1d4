import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import postComment from './postComments';

const FormComment = ({ id }) => {
  const [comment, setComment] = useState({ comment: '', rate: null, elementId: id });
  
  const handleCommentValue = (e) => {
    setComment((prevComment) => ({ ...prevComment, comment: e.target.value }));
  };

  const handleRateValue = (e) => {
    setComment((prevComment) => ({ ...prevComment, rate: e.target.value }));
  };

  const submit = async (e) => {
    e.preventDefault();
   await postComment(comment);
  };

  return (
    <Form onSubmit={submit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Let us know your opinion</Form.Label>
        <Form.Control type="text" onChange={handleCommentValue} placeholder="Write here your comment" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rate this book</Form.Label>
        <Form.Control type="number" onChange={handleRateValue} placeholder="Vote from 1 to 5" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormComment;
