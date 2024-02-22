import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { setSearchBook, handleSearch } from '../../redux/bookSlice'; 
import "./Navbar.css";
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const NavBar = (props) => {
    const dispatch = useDispatch();
    const searchBook = useSelector(state => state.books.searchBook);

    const handleInputChange = (e) => {
        const { value } = e.target;
        dispatch(setSearchBook(value));
    };

    const handleSearchClick = () => {
        dispatch(handleSearch());
        
    };


    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">{props.site}</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#">{props.link1}</Nav.Link>
                        <Nav.Link href="#">{props.link2}</Nav.Link>
                        <Nav.Link href="#">{props.link3}</Nav.Link>
                    </Nav>
                        <ThemeSwitcher/>
                    <div className="mb-3 ms-3">
                        <input
                            className='mt-3 searchBar_'
                            type="text"
                            placeholder="Search by book title..."
                            value={searchBook}
                            onChange={handleInputChange}
                        />
                        <button className="searchBar_" type="button" onClick={handleSearchClick}>
                            Search
                        </button>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
