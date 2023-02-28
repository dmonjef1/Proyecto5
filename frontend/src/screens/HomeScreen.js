import { useEffect, useState } from "react";


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from "../components/Product.js";



function HomeScreen() {
    const [products, setProducts] = useState([]);
    useEffect (()=>{
        const fetchData= async () => {
            const res= await fetch ("http://localhost:5002/products");
            const data = await res.json()
            setProducts(data)
        };
        fetchData();
    },[]);
    return (
        <div>
            <h1>Productos Destacados</h1>
            <Row>
                <div className="productos">
                    {products.map((product) => (
                        <Col key= {product.name}sm={6} md={4} lg={3} className="mn-3">
                            <Product product={product}></Product>
                        </Col>
                    ))}
                </div>
            </Row>
        </div>
    );
}

export default HomeScreen;