
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to="/">Proyecto Ecommerce</Link>
      </header>
      <main>
        <Routes>
          <Route path="/producto/:slug" element={<ProductScreen />} />
          <Route path="/" element={<HomeScreen/>} />
        </Routes>
        
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
