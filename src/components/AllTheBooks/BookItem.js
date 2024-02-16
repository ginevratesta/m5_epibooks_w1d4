import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './BookItem.css';
import CommentArea from '../CommentsSection/CommentArea';

const BookHTML = ({ onClick, id, img, title, price, category }) => {
  
  return (
    <Card id={id} onClick={onClick} >
      <Card.Img variant="top" src={img} />
      <Card.Body className="card_body">
        <Card.Title>{title}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{price} $</ListGroup.Item>
          <ListGroup.Item>{category}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <CommentArea id={id}/>
    </Card>
  );
};

export default BookHTML;
