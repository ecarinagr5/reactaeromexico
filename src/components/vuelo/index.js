import React, { Component }  from 'react';
import ReactDom from 'react-dom';
import './style.scss';

const url_base = 'https://www.aeromexico.com/cms/api/v1/airports?language=es&status=1';

class Search extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            origen:'',
            vuelo: '',
            fecha:'',
            ayer:'',
            manana:'',
            data:'',
            codes:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);   
        this.switchOrigen = this.switchOrigen.bind(this);
    }

    componentDidMount() {
        //Get airports
        fetch(url_base).then( resolve => {
            return resolve.json();
        }).then(data => {
            this.setState({data:data.airports});
            this.codes = this.state.data.map( (todo) => todo.airport.code );
            this.setState({codes:this.codes });
        });

         //Fecha
         let newDate = new Date();
         let date = newDate.getDate();
         let month = newDate.getMonth() + 1;
         let year = newDate.getFullYear();
         let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
         this.fecha = date + ' de ' + meses[ month-1 ];

         this.setState({ 
            fecha: this.fecha,
            ayer: newDate.getDate() - 1 + ' de ' + meses[ month-1 ],
            manana: newDate.getDate() + 1 + ' de ' + meses[ month-1 ]
        });
    }   
    

    handleChange(event) {
        event.target.name === 'origen' ?  this.setState({origen: event.target.value}) : this.setState({vuelo: event.target.value});
    }

    switchOrigen() {
        let origenMain = this.refs.origen.value;
        let vueloMain = this.refs.vuelo.value;
        //switch
        this.refs.vuelo.value = origenMain;
        this.refs.origen.value = vueloMain;

        //Update State
        this.setState({ 
                origen: vueloMain,
                vuelo: origenMain
            });

    }

    handleSubmit(event) {
        event.preventDefault();
    }
    
 
    render() {
        const { origen,vuelo,fecha, ayer, manana,data,codes } = this.state;
      return (
                    <form onSubmit={ this.handleSubmit }>
                        <div className="row search-destino">
                            <div className="col-input input-30 destino-input">
                                <label >Número de Vuelo</label>
                                <input type="text" ref="origen" name="origen" placeholder="" className="input-areo" value= { origen } onChange={this.handleChange} ></input>
                            </div>
                            <div className="col-input input-20 destino-input">
                                <label>Fecha de salida </label>
                                    <select  name="fecha" onChange={this.handleChange} className="custom-select">
                                        <option value={ fecha }> { fecha } </option>
                                        <option value={ ayer }> { ayer } </option>
                                        <option value={ manana }> { manana } </option>
                                    </select>
                   
                            </div>
                            <div className="col-input input-15">
                                <input type="submit" value="BUSCAR" className="Btn btn-enable" />
                            </div>

                   
                        </div>
                    </form>
      );
    }
  
  }
  
  export default Search;