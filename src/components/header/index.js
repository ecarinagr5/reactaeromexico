import React, { Component }  from 'react';
import logo from '../../assets/img/logo.png';
import './style.scss';

class Header extends Component {
    constructor() {
        super();
    }
  
    render() {
      return (
        <header className="header-areomexico">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand medium-nav" href="#">
                    <img src={ logo } className="logoapp" alt="aeromexico" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <div className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link text-white font-links" href="#">Reserva</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white font-links" href="#">Tu Viaje</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white font-links" href="#">Check-In</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white font-links" href="#">Upgrade</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white font-links" href="#">Club Premier</a>
                        </li>
                    </div>
                    <div className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white font-links-mini" href="#">Promociones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white font-links-mini active-link" href="#">Rastrea un vuelo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white font-links-mini" href="#">Destinos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white font-links-mini" href="#">Más</a>
                        </li>
                        
                    </div>
                </div>
            </nav>
        </header>
      );
    }
  
  }
  
  export default Header;