import React from "react";
import Produtos from "./Products";
const Home = () => {
    return(
        <div className="hero">
        <div className="card text-bg-dark text-white border-0">
            <img src="assests/tela.webp" className="card-img" alt="Background"/>
            <div className="card-img-overlay d-felx flex-column justify-content-center">
                <div className="container">
                        <h5 clas="card-title display-3 fw-bolder mb-0"> 
                        NOVA SESSÃO
                        </h5>
                        <p className="card-text lead fs-2">
        
                        CONFIRA TODAS AS TENDÊNCIAS
                        </p>
                </div>
               
            </div>
        </div>
        <Produtos/>
    </div>
    );
    
}

export default Home;