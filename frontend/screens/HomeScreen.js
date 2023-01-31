//import { useEffect, useState } from "react";

import data from "../data.js";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from "../components/Product.js";

const URL= "http://localhost:5000/products"
    fetch(URL)
        .then(response => response.json())
        .then(data=> console.log(data))
        .catch(err=> console.log(err));

function HomeScreen() {
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