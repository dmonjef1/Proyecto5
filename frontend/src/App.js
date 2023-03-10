

import {BrowserRouter, Route , Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from "./screens/ProductScreen.js";
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
;
//import Navbar from 'react-bootstrap/Navbar';
//import {LinkContainer} from 'react-router-bootstrap';
//import Button from 'react-bootstrap/Button';
//import Nav from 'react-bootstrap/Nav';
//import { Link } from 'react-router-dom';





function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="#f0c040" expand="lg">
            <Navbar.Brand href="#home">Proyecto Ecommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="Menu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#Computadores">Computadores</NavDropdown.Item>
                  <NavDropdown.Item href="#Celulares">Celulares</NavDropdown.Item>
                  <NavDropdown.Item href="#Otros complementos">Otros complementos</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#Contactanos">Contactanos</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#Iniciar sesión">Iniciar sesión</Nav.Link>
                <Nav.Link href="#Tus compras">Carro</Nav.Link>
              </Nav>
              <div className="container">
              <Form inline className="form-buscar">
  <FormControl type="text" placeholder="Buscar productos" className="mr-sm-2 form-control" />
  <Button variant="outline-success" className="btn-buscar">Buscar</Button>
</Form>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/products/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer style={{ background: "#F7DC6F", padding: "20px" }}>
          <div className="container2 text-center">
            <p style={{ fontSize: "16px", margin: "0" }}>
              Todos los derechos reservados &copy; DMONJE/SCORTESC
            </p>
            <div style={{ marginTop: "10px" }}>
              <a href="/">Política de privacidad</a>
              <span style={{ margin: "0 10px" }}>|</span>
              <a href="/">Términos y condiciones</a>
            </div>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;