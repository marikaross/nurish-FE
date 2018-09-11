import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink, Route } from 'react-router-dom';
import Form from '../Form/Form';
import Search from '../Search/Search';
import FormulaContainer from '../../components/FormulaContainer/FormulaContainer';
import Calculate from '../Calculate/Calculate';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src='images/nurish-logo.gif'/>
        <Route exact path='/' component={Form}/>
				<Route path='/search' component={Search}/>
				<Route exact path='/calculate' component={Calculate}/>
				<Route exact path='/browse' component={FormulaContainer}/>
      </div>
    );
  }
}

export default withRouter((App));
