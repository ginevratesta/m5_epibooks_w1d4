import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './BookItem.css';
import CommentArea from '../CommentsSection/CommentArea';
import "../ThemeSwitcher/ThemeSwitcher.css";
import { isDarkModeActive } from '../../redux/darkModeSlice';
import { useSelector } from "react-redux";

const BookHTML = ({ onClick, id, img, title, price, category }) => {
  const isDarkMode = useSelector(isDarkModeActive);
  
  return (
    <Card  onClick={onClick} >
      <Card.Img variant="top" src={img} />
      <Card.Body className={isDarkMode ? "dark-mode card_body" : "card_body"}>
        <Card.Title>{title}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className = {isDarkMode ? "dark-mode" : ""}>{price} $</ListGroup.Item>
          <ListGroup.Item className = {isDarkMode ? "dark-mode" : ""}>{category}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <CommentArea id={id}/>
    </Card>
  );
};

export default BookHTML;
