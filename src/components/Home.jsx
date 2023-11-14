/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <section className="text-center">
                    <img src="src/assets/logo_color.png" width={"40%"} height={"40%"} />
                    <br />
                    <h1 className="titulo">Bazar Online</h1>
                    <br />
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <input className="form-control" id="searchProduct" name="searchProduct" type="text" placeholder="Encuentra tus productos al instante" value={inputValue} onChange={handleInputChange} />
                            <Link to={`/search/${inputValue}`}>
                                <button className="btn form-control mt-4" id="btnSearch" name="btnSearch" >Buscar</button>
                            </Link>
                            {/* <button className="btn form-control mt-4" id="btnSearch" name="btnSearch" onClick={searchProduct}>Buscar</button> */}
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </section>
            </div>
        </div>

	</div>
    </>
  )
}

export default Home