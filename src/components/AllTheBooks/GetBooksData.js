import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookHTML from "./BookItem";

const URL = "https://epibooks.onrender.com/romance";

const GetBooksData = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          console.log(response.status);
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setBooks(data);
        setLoading(false); 
      } catch (error) {
        console.error(error.message);
      }
    };
    
    fetchBooks();
  }, []);

  if (loading) {
    return <div><h1 className="text-center mt-5">Loading...</h1></div>; 
  }
  
  return (
    <Container className="py-5">
      <Row className="g-4">
        {books.map((book) => (
          <Col md="6" lg="3" key={book.asin}>
            <BookHTML
              img={book.img}
              title={book.title}
              price={book.price}
              category={book.category}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GetBooksData;
