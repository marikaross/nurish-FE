import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
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