import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = (props) => {
    const site = props.site
    const home = props.link1;
    const about = props.link2;
    const browse = props.link3
    return (
        <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">{site}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">{home}</Nav.Link>
            <Nav.Link href="#">{about}</Nav.Link>
            <Nav.Link href="#">{browse}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
};

export default NavBar;