import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink, Route } from 'react-router-dom';
import Search from '../Search/Search';
import FormulaContainer from '../FormulaContainer/FormulaContainer';
import Calculate from '../Calculate/Calculate';
import './Form.css'; 
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    return (
      <div className="form-container links">
				<NavLink to='/search'>search</NavLink>
				<NavLink to='/browse'>browse</NavLink>
      </div>
    );
  }
}

Form.propTypes = {
  
}

export default withRouter((Form));