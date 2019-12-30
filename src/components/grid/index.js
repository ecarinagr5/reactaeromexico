import React, { Component }  from 'react';
import './style.scss';

class Grid extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }
  
    render() {
      return (
        <div className="container-grid">
          <div className="grid-header">
              <div className="col-grid">
                <p className="title-col-grid">Número de vuelo</p>
              </div>
              <div className="col-grid">
                <p className="title-col-grid"> Estado </p>
              </div>
              <div className="col-grid">
                <p className="title-col-grid">Origen</p>
              </div>
              <div className="col-grid">
                <p className="title-col-grid">Hora de salida</p>
              </div>
              <div className="col-grid">
                <p className="title-col-grid"></p>
              </div>
              <div className="col-grid"> 
                <p className="title-col-grid">Hora de llegada </p>
              </div>
              <div className="col-grid">
                <p className="title-col-grid">Destino</p>
              </div>
            </div>

            <div className="grid-airports desktop-grid">
              <div className="col-grid-airports">
                <p>AM 315</p>
                <span>Operado por Aerolitoral</span>
              </div>
              <div className="col-grid-airports">
                <p className="status-llego">Llegó</p>
              </div>
              <div className="col-grid-airports">
                <p>MEX</p>
                <span>Terminal T2</span>
              </div>
              <div className="col-grid-airports">
                <p>11:59</p>
              </div>
              <div className="col-grid-airports">
                <div className="container-line">
                  <p className="dot"></p>
                  <p className="line"></p>
                  <p className="dotb"></p>
                </div>
              </div>
              <div className="col-grid-airports"> 
                <p>12:50</p>
              </div>
              <div className="col-grid-airports">
                <p>ACA</p>
                <span>Terminal N/A</span>
                <span>Sala N/A</span>
              </div>
            </div>

            <div className="grid-airports mobile-grid">
              <div className="col-grid-airports">
                <p>AM 315</p>
                <p className="mini-text">Operado por Aerolitoral</p>
                <p className="status-llego">Llegó</p>
              </div>
              <div className="col-grid-airports">
                <p>MEX</p>
                <p className="mini-text">Terminal T2</p>
              </div>
              <div className="col-grid-airports">
                <p>ACA</p>
                <p className="mini-text">Terminal N/A</p>
              </div>
              <div className="col-grid-airports-hour">
                <p className="col-three">11:59</p>
              <div className="col-three">
                <div className="container-line">
                  <p className="dot"></p>
                  <p className="line"></p>
                  <p className="dotb"></p>
                </div>
              </div>
                <p className="col-three">12:50</p>
              </div>
        
            </div>

        </div>
      );
    }
  
  }
  
  export default Grid;