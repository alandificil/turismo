import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
       
        <a className="navbar-brand" href="#"><i className="fas fa-globe-americas"></i>&nbsp;Coqueiros Turismo</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
        aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>   
       
        
        <section className="collapse navbar-collapse"  id="navbarMainToggler">
          <div className="navbar-nav ml-auto pr-3">
            <a className="nav-item nav-link" href="#">Home</a>
            <a className="nav-item nav-link dropdown-toggle" href="#" role= "button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Onde Comer
            </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Pousada Roccaporena</a>
                <a className="dropdown-item" href="#">Engenho Coronel</a>
                <a className="dropdown-item" href="#">Camping Pocinho do Binga</a>
              </div>

            <a className="nav-item nav-link dropdown-toggle" href="#" role= "button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pontos Turísticos</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Pousada Roccaporena</a>
                <a className="dropdown-item" href="#">Engenho Coronel</a>
                <a className="dropdown-item" href="#">Camping Pocinho do Binga</a>
              </div>
            <a className="nav-item nav-link dropdown-toggle" href="#" role= "button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Hospedagem
            </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Pousada Roccaporena</a>
                <a className="dropdown-item" href="#">Engenho Coronel</a>
                <a className="dropdown-item" href="#">Camping Pocinho do Binga</a>
              </div>

            <a className="nav-item nav-link" href="#">Contato</a>          
          </div>

          <form className="form-inline">
            <div className="input-group">              
              <input type="text" className="form-control" placeholder="escreva aqui"/>&nbsp;
                <button className="btn btn-outline-success mr-3">Procurar</button>
            </div>
          </form>
        </section>

      </nav>
    </div>
  );
}

export default App;
