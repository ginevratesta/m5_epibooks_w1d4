import "./CommentArea.css";
import { useState, useEffect } from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';
import FormComment from './FormComment';

const CommentArea = ({ id }) => {
  const [show, setShow] = useState(false);
  const [comments, setComments] = useState([]);
  const [cardId, setCardId] = useState("");
  const [revalidate, setRevalidate] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCardClick = (e) => {
    setCardId(e.target.id);
    handleShow();
  };

  const handlerRevalidate = (isRevalitated) => {
    setRevalidate(isRevalitated);
  };


  useEffect(() => {
    if (cardId) {
    const fetchComments = async (cardId) => {
      try {
        const res = await fetch(`https://striveschool-api.herokuapp.com/api/books/${cardId}/comments/`);
        if (res.ok) {
          const data = await res.json();
          setComments(data);
          setRevalidate(false);
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
  }, [cardId, revalidate]);

  return (
    <>
      <Button id= {id} variant="tertiary" onClick={handleCardClick}>
        Show Comments
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Comments Area</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_">
          <Row>
            <Col lg="7">
              <div>
                {comments.length === 0 ? (
                  <p>No comments yet</p>
                ) : (
                  comments.slice().reverse().map((comment, i) => (
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
              <FormComment id={id} handlerRevalidate={handlerRevalidate}/>
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
