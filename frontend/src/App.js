
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from "./screens/ProductScreen";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';
import './index.css'


function App() {
  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
      <header>
        <Navbar>
          <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Proyecto Ecommerce</Navbar.Brand>
        </LinkContainer>
        </Container>
        </Navbar>
      </header>
      <main>
        <Container>
        <Routes>
          <Route path="/products/:slug" element={<ProductScreen />} />
          <Route path="/" element={<HomeScreen/>} />
        </Routes>
        </Container>     
      </main>
      <footer>
        <div className="text-center">Todo los derechos reservados por DMONJE/SCORTESC</div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;