import { Navbar, Nav, Container } from "react-bootstrap";
const Main = document.getElementById("Main");
const Link = document.getElementsByClassName("coba");
const Navbari = () => {
  const home = () => {
    Main.classList.toggle("d-none");
    Link.classList.toggle("d-none");
  };
  return (
    <Navbar bg="light" expand="xl">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={home}>Home</Nav.Link>
            <Nav.Link href="#link" className="d-none" id="coba">
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbari;
