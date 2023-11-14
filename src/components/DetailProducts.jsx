import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './DetailProducts.css';
import './Products.css';
import RatingStars from '../components/Rating';

const DetailProduct = () => {
    const idProduct = useParams().id;
    const [producto, setProduct] = useState([]);

    const getProduct = async () => {
        const url = `https://localhost:7140/Products/Get/${idProduct}`;
        const resp = await fetch(url);
        const data = await resp.json();
        setProduct(data);
    };

    useEffect(() => {
        getProduct();
    }, [idProduct]);

    return (
        <>
            <Link to={`/`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <a href="index.html" className="logo">
                    <img src="src/assets/logo_color.png" width={10} height={10}></img>
                    <p className="mt-2">Regresar</p>
                </a>
            </Link>
            <div className='container'>
                <div className='row'>
                    <center>
                        <div className='col-12 mt-5'>
                            <div className='card mb-5 shadow p-3 rounded' style={{ width: '25rem' }}>
                                <div className='card-header text-center bg-white' >
                                    <img src={producto.imagen} className='card-img-top' width={250} height={350} />
                                </div>
                                <div className='card-body'>
                                    <div className="card-body">
                                        <div className="title-card mb-2"> {producto.nombre} </div>
                                        <div className="cat-card mb-2"><mark>{producto.categoria}</mark></div>
                                        <div className="description-card"> {producto.descripcion}</div>
                                        <div className="price-card">Precio: ${producto.precio}</div>
                                        <div className="rating-card mt-1"><RatingStars rating={producto.rating} /></div>
                                        <button className='btn btn-success mt-2'>Comprar</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </>
    );
};

export default DetailProduct;
