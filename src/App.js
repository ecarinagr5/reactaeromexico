import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/header';
import Search from './components/search';
import Grid from './components/grid';

//REDUX
import { setCity } from './actions';
import { connect } from 'react-redux';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { destino:null };
  }

  render() {
    return(
      <div>
        <Header></Header>
        <Search></Search>
        <Grid></Grid>
      </div>
    );
  }
}



const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setCity(value))
});
const AppConnected = connect(null, mapDispatchToPropsActions)(App);

export default AppConnected;