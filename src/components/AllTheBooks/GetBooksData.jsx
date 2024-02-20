import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks, setError } from '../../redux/bookSlice';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookHTML from "./BookItem";
import ErrorMessage from "../ErrorNotification/ErrorMessage";

const URL = "https://epibooks.onrender.com/romance";

const GetBooksData = () => {
    const dispatch = useDispatch();
    const { books, loading, error, filteredBooks } = useSelector(state => state.books);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error("Failed to fetch books");
                }
                const data = await response.json();
                dispatch(setBooks(data));
            } catch (error) {
                dispatch(setError(error.message));
            }
        };

        fetchBooks();
    }, [dispatch]);

    const changeColor = (e) => {
        const selectedBook = e.currentTarget;
        selectedBook.classList.toggle("clicked-card");
    };

    return (
        <>
            {error ? (
                <ErrorMessage error={error} />
            ) : (
                <Container className="py-5">
                    {loading ? (
                        <div>
                            <h1 className="text-center mt-5">Loading...</h1>
                        </div>
                    ) : (
                        <Row className="g-4">
                            {(filteredBooks.length > 0
                                ? filteredBooks
                                : books
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
