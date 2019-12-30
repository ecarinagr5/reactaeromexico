import React, { Component }  from 'react';
import getFlight from '../services/store'
import imgswitch from '../../assets/img/transferir.png';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './style.scss';
import { connect } from 'react-redux';
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

  
class Search extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            origen:'',
            vuelo: '',
            fecha:'',
            ayer:'',
            manana:'',
            fechavalue:'',
            ayervalue:'',
            mananavalue:'',
            fechasend:'',
            airports:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);   
        this.switchOrigen = this.switchOrigen.bind(this);
        this.getCodes = this.getCodes.bind(this);
    }

    componentDidMount() {
        //Get airports
        this.getCodes();
         //Fecha
         let newDate = new Date();
         let date = newDate.getDate();
         let month = newDate.getMonth() + 1;
         let year = newDate.getFullYear();
         let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
         this.fecha = date + ' de ' + meses[ month-1 ];
 
         this.setState({ 
            fecha: this.fecha,
            fechasend:`${year}-${month}-${date}`,
            ayer: newDate.getDate() - 1 + ' de ' + meses[ month-1 ],
            manana: newDate.getDate() + 1 + ' de ' + meses[ month-1 ],
            fechavalue: `${year}-${month}-${date}`,
            ayervalue:  `${year}-${month}-${date-1}`,
            mananavalue: `${year}-${month}-${date+1}`,
        });
    }   
    
    getCodes() {
        const url_base = 'https://www.aeromexico.com/cms/api/v1/airports?language=es&status=1';
        let codes= [];
        fetch(url_base).then( resolve => {
            return resolve.json();
        }).then(data => {;
            this.airports = data.airports;
            this.codes = this.airports.map((location) => location.airport );
            this.setState ({airports: this.codes});
        });
    }

    handleChange(event) {
        console.log("e", event.target)
        //Autocomplete
        if( event.target.id === 'origen-option-2' ) {
            this.setState({origen: event.target.value})
        }
        else if ( event.target.id === 'vuelo-option-2'  ) {
            this.setState({vuelo: event.target.value})
        } 
        else if ( event.target.name === 'fecha'  ) {
            this.setState(
                {
                    fechasend: event.target.value,
                    fecha:event.target.value
                })
        }
    }


    switchOrigen() {
        let origenMain = document.getElementById('origen').value;
        let vueloMain = document.getElementById('vuelo').value;


        //switch
        document.getElementById('vuelo').value = origenMain;
        document.getElementById('origen').value = vueloMain;

        //Update State
        this.setState({ 
                origen: vueloMain,
                vuelo: origenMain
            });

    }

    handleSubmit(event) {
        const { origen, vuelo, fechasend } = this.state;
        const dataSend = {
            store: 'mx',
            post: 'WEB',
            flight: '',
            date:fechasend,
            origin:'MEX',
            destination:'ACA'
        }
        getFlight(dataSend);
        event.preventDefault();
    }
    
 
    render() {
        const { origen,vuelo,fecha, ayer, manana, fechavalue, ayervalue,mananavalue,airports } = this.state;
      return (
             <form onSubmit={ this.handleSubmit }>
                <div className="row search-destino">
                            <div className="col-input input-30 destino-input">
                                <label >Origen | Ver todos</label>
                                <Autocomplete
                                    id="origen"
                                    options={airports}
                                    getOptionLabel={option => option.alias}
                                    onChange={this.handleChange} 
                                    renderInput={params => (
                                     <TextField {...params}  placeholder="Origen" name="origen" variant="outlined" className="input-areo" fullWidth />
                                    )}
                                />

                            </div>
                            <div className="col-input input-5">
                                <div className="swhitch-buttom" onClick={this.switchOrigen.bind(this) }> <img src= { imgswitch }/></div>
                            </div>
                            <div className="col-input input-30 destino-input">
                                <label>Destino | Ver todos </label>
                                <Autocomplete
                                    id="vuelo"
                                    options={airports}
                                    getOptionLabel={option => option.alias}
                                    onChange={this.handleChange} 
                                    renderInput={params => (
                                     <TextField {...params}  placeholder="Destino" name="destino" variant="outlined" className="input-areo"  fullWidth />
                                    )}
                                />
                               
                            </div>
                            <div className="col-input input-20 destino-input">
                                <label>Fecha de salida </label>
                                    <select name="fecha" value={this.state.fecha} onChange={this.handleChange} className="custom-select">
                                        <option value={ fechavalue }> { fecha } </option>
                                        <option value={ ayervalue }> { ayer } </option>
                                        <option value={ mananavalue }> { manana } </option>
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