import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookHTML from "./BookItem";
import ErrorMessage from "../ErrorNotification/ErrorMessage";

const URL = "https://epibooks.onrender.com/romance";
const formID = "searchBar";

const GetBooksData = () => {
  const [stateBookData, setStateBookData] = useState({
    books: [],
    loading: true,
    searchBook: "",
    filteredBooks: [],
    searchPerformed: false,
  });

  const [errorObj, setErrorObj] = useState({ err: false, message: "" });

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          console.log(response.status);
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setStateBookData((prevStateBookData) => ({
          ...prevStateBookData,
          books: data,
        }));

        setStateBookData((prevStateBookData) => ({
          ...prevStateBookData,
          loading: false,
        }));
      } catch (error) {
        console.log("hello");

        setErrorObj((prevErrorObj) => ({ err: true, message: error.message }));
        console.error(error.message);
      }
    };

    fetchBooks();
  }, [errorObj.error]);

  const handleSearch = () => {
    const filtered = stateBookData.books.filter((book) =>
      book.title.toLowerCase().includes(stateBookData.searchBook.toLowerCase())
    );
    setStateBookData((prevStateBookData) => ({
      ...prevStateBookData,
      filteredBooks: filtered,
    }));
    setStateBookData((prevStateBookData) => ({
      ...prevStateBookData,
      searchPerformed: true,
    }));
    setStateBookData((prevStateBookData) => ({
      ...prevStateBookData,
      searchBook: "",
    }));
  };

  const handleInputChange = ({ target: { value } }) => {
    setStateBookData((prevStateBookData) => ({
      ...prevStateBookData,
      searchBook: value,
    }));
    setStateBookData((prevStateBookData) => ({
      ...prevStateBookData,
      searchPerformed: false,
    }));
  };

  const changeColor = (e) => {
    const selectedBook = e.currentTarget;
    selectedBook.classList.toggle("clicked-card");
  };

  return (
    <>
      {errorObj.err ? (
        <ErrorMessage error={errorObj.message} />
      ) : (
        <Container className="py-5">
          <div className="mb-3">
            <input
              id={formID}
              type="text"
              placeholder="Search by book title..."
              value={stateBookData.searchBook}
              onChange={handleInputChange}
            />
            <button type="button" onClick={handleSearch}>
              Search
            </button>
          </div>

          {stateBookData.loading ? (
            <div>
              <h1 className="text-center mt-5">Loading...</h1>
            </div>
          ) : (
            <Row className="g-4">
              {(stateBookData.searchPerformed &&
              stateBookData.filteredBooks.length > 0
                ? stateBookData.filteredBooks
                : stateBookData.books
              ).map((book) => (
                <Col md="6" lg="3" key={book.asin}>
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
      )}
    </>
  );
};

export default GetBooksData;
