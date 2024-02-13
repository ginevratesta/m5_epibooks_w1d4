import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookHTML from "./BookItem";

const URL = "https://epibooks.onrender.com/romance";
const formID = "searchBar";

const GetBooksData = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchBook, setSearchBook] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);
  // const [counter, setCounter] = useState(0);

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

  const handleSearch = () => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchBook.toLowerCase())
    );
    setFilteredBooks(filtered);
    setSearchPerformed(true);
    setSearchBook("");
  };

  const handleInputChange = (e) => {
    setSearchBook(e.target.value);
    setSearchPerformed(false);
  };

  const changeColor = (e) => {
    const selectedBook = e.currentTarget;
    selectedBook.classList.toggle("clicked-card");
  };


  return (
    <Container className="py-5">
      <div className="mb-3">
        <input
          id={formID}
          type="text"
          placeholder="Search by book title..."
          value={searchBook}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {loading ? (
        <div>
          <h1 className="text-center mt-5">Loading...</h1>
        </div>
      ) : (
        <Row className="g-4">
          {(searchPerformed && filteredBooks.length > 0
            ? filteredBooks
            : books
          ).map((book) => (
            <Col md="6" lg="3" key={book.asin} id={book.asin}>
              <BookHTML
                onClick={changeColor}
                id={book.asin}
                img={book.img}
                title={book.title}
                price={book.price}
                category={book.category}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default GetBooksData;
