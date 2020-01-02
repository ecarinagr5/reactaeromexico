import React, { Component }  from 'react';
import './style.scss';

class Grid extends Component {
    constructor() {
        super();
    }
    render() {
      const { 
          marketingCarrier,status, departureAirport, departureDateTime,
          arrivalDateTime,arrivalAirport, arrivalTerminal,operatingFlightCode } = this.props.resultsairports;
      const hora  = departureDateTime.split('T');
      const llegada = arrivalDateTime.split('T');
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
                <p>{marketingCarrier} {operatingFlightCode }</p>
                <span>Operado por Aerolitoral</span>
              </div>
              <div className="col-grid-airports">
              <p className={status === "ARRIVED"?'green':'red'}>{ status === "ARRIVED" ? 'Llegó':'Salio' }</p>
              </div>
              <div className="col-grid-airports">
                <p>{ departureAirport }</p>
                 <span>Terminal T{arrivalTerminal}</span>
              </div>
              <div className="col-grid-airports">
                <p>{ hora[1] }</p>
              </div>
              <div className="col-grid-airports">
                <div className="container-line">
                  <p className="dot"></p>
                  <p className="line"></p>
                  <p className="dotb"></p>
                </div>
              </div>
              <div className="col-grid-airports"> 
                <p> { llegada[1] }</p>
              </div>
              <div className="col-grid-airports">
                  <p> { arrivalAirport }</p>
                <span>Terminal N/A</span>
              </div>
            </div>

            <div className="grid-airports mobile-grid">
              <div className="col-grid-airports">
                <p>{marketingCarrier} {operatingFlightCode }</p>
                <p className="mini-text">Operado por Aerolitoral</p>
                <p className={status === "ARRIVED"?'green':'red'}>{ status === "ARRIVED" ? 'Llegó':'Salio' }</p>
              </div>
              <div className="col-grid-airports">
                <p>{ departureAirport }</p>
                <p className="mini-text">Terminal T{arrivalTerminal}</p>
              </div>
              <div className="col-grid-airports">
                <p>{ arrivalAirport }</p>
                <p className="mini-text">Terminal N/A</p>
              </div>
              <div className="col-grid-airports-hour">
                <p className="col-three">{ hora[1] }</p>
              <div className="col-three">
                <div className="container-line">
                  <p className="dot"></p>
                  <p className="line"></p>
                  <p className="dotb"></p>
                </div>
              </div>
                <p className="col-three">{ llegada[1] }</p>
              </div>
        
            </div>

        </div>
      );
    }
  
  }
  
  export default Grid;