import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./BookItem.css";

const BookHTML = (props) => {
    const img = props.img;
    const title = props.title;
    const price = props.price;
    const category = props.category;

    return(
        <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body className="card_body">
        <Card.Title>{title}</Card.Title>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{price} $</ListGroup.Item>
        <ListGroup.Item>{category}</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>

    ) 
};

export default BookHTML;