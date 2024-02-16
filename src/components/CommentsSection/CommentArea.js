import "./CommentArea.css";
import { useState, useEffect } from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';
import FormComment from './FormComment';

const CommentArea = ({ id }) => {
  const [show, setShow] = useState(false);
  const [comments, setComments] = useState([]);
  const [cardId, setCardId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCardClick = (e) => {
    console.log(e)
    setCardId(e.target.id);
    console.log(cardId);
    handleShow();
  };


  useEffect(() => {
    if (cardId) {
    const fetchComments = async (cardId) => {
      try {
        const res = await fetch(`https://striveschool-api.herokuapp.com/api/books/${cardId}/comments/`);
        if (res.ok) {
          const data = await res.json();
          setComments(data);
          console.log(comments);
        } else {
          throw new Error('Failed to fetch comments');
        }
      } catch (error) {
        console.error('Error:', error);
        alert(error.message);
      }
    };
    fetchComments(cardId)
  }
  }, [cardId]);

  return (
    <>
      <Button id= {id} variant="primary" onClick={handleCardClick}>
        Show Comments
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Comments Area</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg="7">
              <div>
                {comments.length === 0 ? (
                  <p>No comments yet</p>
                ) : (
                  comments.map((comment, i) => (
                    <div key = {i}>
                      <p>{comment.author}</p>
                      <p>{comment.comment}</p>
                      <span><p>{comment.rate}</p></span>
                      </div>
                  ))
                )}
              </div>
            </Col>
            <Col lg="5">
              <FormComment id={id}/>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CommentArea;
