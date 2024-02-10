import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookHTML from './BookItem';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://epibooks.onrender.com/romance');
        if (!response.ok) {
            console.log(response.status);
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();

  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
      <Container className="py-5">
            <h2 className="text-center text-warning mb-3">All the books</h2>
          <Row className="g-4">
        {books.map((book) => 
          <Col md="6" lg="3">
          <BookHTML key = {book.asin} img ={book.img} title = {book.title} price = {book.price} category = {book.category} /> 
          </Col>
      )}
         </Row>
      </Container>
  );
}

export default BookList;