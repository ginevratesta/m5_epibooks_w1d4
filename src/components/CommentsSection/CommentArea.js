
import "./CommentArea.css";
import { useState, useEffect } from 'react';
import {Button, Modal, Row, Col} from 'react-bootstrap';
import FormComment from './FormComment';



const CommentArea = ({id}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [rating, setRating] = useState([]);

  useEffect(() => {
    const getComments = async (comment) => {
      try {
        const res = await fetch(`https://striveschool-api.herokuapp.com/api/books/${comment.elementId}/comments/`);
        const data = await res.json();
        setRating(data);

      } catch (error) {
        console.error('Error:' + error);
        alert(error);
      }
    };

    getComments();
    console.log(rating);
  },[rating]);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Show Comments
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Comments Area</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col lg="7">
                    <div>
                  {/* {rating.map(rate =>  )} */}
                    </div>
                </Col>
                <Col lg="5">
                <FormComment id = {id} />
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


