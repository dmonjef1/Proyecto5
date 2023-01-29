//import { useEffect, useState } from "react";
//import axios from 'axios';
import data from "../data";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from "../components/Product";

function HomeScreen() {

    // const [products, setProducts] = useState([]);
    //useEffect(() => {
    //  const fetchData = async () => {
    //    const result = await axios.get('/api/products');
    //  setProducts(result.data);
    // };
    //fetchData();
    // }, []);

    return (
        <div>
            <h1>Productos Destacados</h1>
            <Row>
                <div className="productos">
                    {data.products.map((product) => (
                        <Col sm={6} md={4} lg={3} className="mn-3">
                            <Product product={product}></Product>
                        </Col>
                    ))}
                </div>
            </Row>
        </div>
    );
}

export default HomeScreen;