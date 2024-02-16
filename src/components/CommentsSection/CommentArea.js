
import "./CommentArea.css";
import { useState } from 'react';
import {Button, Modal, Row, Col} from 'react-bootstrap';
import FormComment from './FormComment';


const CommentArea = ({id}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

                    </div>
                </Col>
                <Col lg="5">
                <FormComment id = {id}/>
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


