import React, { Component } from 'react';
import { withRouter, NavLink} from 'react-router-dom';
import './Form.css'; 

class Form extends Component {
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