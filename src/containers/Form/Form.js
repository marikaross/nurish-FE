import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink, Route } from 'react-router-dom';
import Search from '../Search/Search';
import FormulaContainer from '../../components/FormulaContainer/FormulaContainer';
import Calculate from '../Calculate/Calculate';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <div className="form">
				<NavLink to='/search'>search</NavLink>
				<NavLink to='/calculate'>calculate</NavLink>
				<NavLink to='/browse'>browse</NavLink>
      </div>
    );
  }
}

export default withRouter((Form));