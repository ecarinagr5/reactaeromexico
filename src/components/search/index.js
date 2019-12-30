import React, { Component }  from 'react';
import ReactDom from 'react-dom';
import Destino from '../destino';
import Vuelo from '../vuelo';
import './style.scss';

const url_base = 'https://www.aeromexico.com/cms/api/v1/airports?language=es&status=1';

class Search extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            option :''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState ({option:'destino'});
        this.refs.destino.checked = true;
    }   
    

    handleChange(event) {
        this.setState({option:event.target.value });
    }

    render() {
        const { option } = this.state;
       return (
            <div className="search-aero-bar">
                  <div className="row inside-search">
                    <div className="col-md-2 flight-first-grid">
                        <div>
                            <input ref="destino" type="radio" name="origen" value="destino" className="input-checkbox form-radio" onChange={ this.handleChange } /> <label className="text-white">Destino</label>
                        </div>
                        <div>
                            <input ref="vuelo" type="radio" name="origen" value="vuelo" className="input-checkbox form-radio" onChange={ this.handleChange } /> <label className="text-white">Número de vuelo</label>
                        </div>
                    </div>
                    <div className="col bar-right">
                            { option === 'vuelo' ? <Vuelo></Vuelo> : <Destino></Destino>  }
                    </div>
                </div>
            </div>
      );
    }
  
  }
  
  export default Search;