import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/header';
import Search from './components/search';
import Grid from './components/grid';


//Redux
import { connect } from 'react-redux';


class App extends React.Component  {
  constructor(props) {
      super(props);
  }

    render(){
      console.log("porps",this.props)
     const { resultsairports } = this.props;
     const length = resultsairports.length;
      return (
          <div>
            <Header></Header>
            <Search></Search>
            { length === 0 ?'': <Grid {...this.props}></Grid> }
          </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
      resultsairports: state.results,
  };
}

export default connect(mapStateToProps)(App);