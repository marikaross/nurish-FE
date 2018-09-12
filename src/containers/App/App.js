import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink, Route } from 'react-router-dom';
import Form from '../Form/Form';
import Search from '../Search/Search';
import FormulaContainer from '../FormulaContainer/FormulaContainer';
import Calculate from '../Calculate/Calculate';
import Filter from '../Filter/Filter';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src='images/nurish-logo.gif'/>
        <Route exact path='/' component={Form}/>
        <Route path='/filter' component={Filter}/>
				<Route path='/search' component={Search}/>
				<Route path='/calculate' component={Calculate}/>
				<Route path='/browse' component={FormulaContainer}/>
      </div>
    );
  }
}

// App.proptypes = {
//   formulas: PropTypes.array,
// };

export default withRouter((App));
