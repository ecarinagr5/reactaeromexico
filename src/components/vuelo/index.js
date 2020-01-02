import React, { Component }  from 'react';
import imgswitch from '../../assets/img/transferir.png';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './style.scss';
import axios from 'axios';

//Redux
import { connect } from 'react-redux';
import findResults from '../../redux/actions/findResults';

  
class Vuelo extends Component {
    

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
    }

    componentDidMount() {
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
    

    handleChange(event) {
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
        const { fechasend } = this.state;
        const data = {
            store: 'mx',
            post: 'WEB',
            flight: '',
            date:fechasend,
            origin:'MEX',
            destination:'MTY'
        }
       this.props.findResults(data);
        event.preventDefault();
    }
    
 
    render() {
        const { origen,fecha, ayer, manana } = this.state;
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


const mapStateToProps = (state) => {
    return {
        cities: state.allairports,
    };
  }

  const mapDispatchToProps = (dispatch) => {
        return {
            findResults: text => dispatch(findResults(text)),
        };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Vuelo);