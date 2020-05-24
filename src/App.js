import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
       
        <a className="navbar-brand" href="#"><i className="fas fa-globe-americas"></i>&nbsp;Coqueiros Turismo</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
        aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>   
       
        
        <section className="collapse navbar-collapse"  id="navbarMainToggler">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#">Home</a>
            <a className="nav-item nav-link" href="#">Onde ir</a>
            <a className="nav-item nav-link" href="#">Contato</a>
          </div>
        </section>

      </nav>
    </div>
  );
}

export default App;
