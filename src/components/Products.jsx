import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './Products.css';
import RatingStars from '../components/Rating';

const Products = () => {
    const { name } = useParams();
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        const url_api = 'https://localhost:7140/Products/GetAll';
        const response = await fetch(url_api);
        const data = await response.json();
        setProducts(data);
    };

    const searchProduct = useCallback(async () => {
        if (name === '') {
            getAllProducts();
        } else {
            const api = await fetch(`https://localhost:7140/Products/search/${name}`);
            const data = await api.json();
            if (!data || Object.keys(data).length === 0) {
                return (
                    <center>
                        <h2 style={{ color: "black" }}>No se encontraron resultados.</h2>
                    </center>
                );
            } else {
                setProducts(data);
            }
        }
    }, [name, setProducts]);

    useEffect(() => {
        searchProduct();
    }, [searchProduct]);

    const searchProd = useCallback(async () => {
        const name = document.getElementById('txtProduct').value;
        if (name === '') {
            getAllProducts();
        } else {
            const api = await fetch(`https://localhost:7140/Products/search/${name}`);
            const data = await api.json();
            if (!data || Object.keys(data).length === 0) {
                return (
                    <center>
                        <h2 style={{ color: "black" }}>No se encontraron resultados.</h2>
                    </center>
                );
            } else {
                setProducts(data);
            }
        }
    }, [setProducts]);


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="row mt-5">
                        <div className="col-3">
                            <img src="src/assets/logo_color.png" alt="" />
                        </div>
                        <div className="col-7">
                            <input className="form-control" name="txtProduct" id="txtProduct" type="text" placeholder="Buscar productos..." />
                        </div>
                        <div className="col-2">
                            <button id="btnSearch" className="btn" onClick={searchProd}><b>Buscar</b></button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="card" className="mt-5">
                {products.map((product, index) => (
                    <div className="card mb-5 shadow p-3 rounded me-4" key={index} style={{ width: '18rem' }}>
                        <img className="card-img-top" src={product.imagen} width={200} height={250} />
                        <Link to={`/detail/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="card-body">
                                <div className="cat-card mb-1"><mark>{product.categoria}</mark></div>
                                <div className="title-card"> {product.nombre} </div>
                                <div className="description-card"> {product.descripcion}</div>
                                <div className="price-card">Precio: ${product.precio}</div>
                                <div className="rating-card mt-1"><RatingStars rating={product.rating} /></div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Products;