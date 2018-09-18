import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink, Route } from 'react-router-dom';
import Search from '../Search/Search';
import FormulaContainer from '../FormulaContainer/FormulaContainer';
import './Form.css'; 

export class Form extends Component {
  render() {
    return (
      <div className="form-container links">
				<NavLink to='/search'>search</NavLink>
				<NavLink to='/filter'>filter</NavLink>
				<NavLink to='/formulas'>browse</NavLink>
      </div>
    );
  }
}

export default withRouter((Form));