import { Link } from "react-router-dom";
import data from "../data";

function HomeScreen() {
    return (
        <div>
            <h1>Productos Destacados</h1>
            <div className="productos">
                {data.productos.map((producto) => (
                    <div className="producto" key={producto.slug}>
                        <Link to={`/producto/${producto.slug}`}>
                            <img src={producto.image} alt={producto.name}></img>
                        </Link>
                        <div className="info-producto">
                            <Link to={`/producto/${producto.slug}`}>
                                <p>{producto.name}</p>
                            </Link>
                            <p>
                                <strong>${producto.price}</strong>
                            </p>
                            <button>Agregar al carro</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeScreen;
