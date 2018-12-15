import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import './Form.css';

export class Form extends Component {
  render() {
    return (
      <div className="form-container links">
  				<NavLink to='/search'><FormattedMessage className="form-container links" id="Form.search-button" defaultMessage="Search"/></NavLink>

  				<NavLink to='/filter'><FormattedMessage className="form-container links" id="Form.filter-button" defaultMessage="Filter"/></NavLink>

  				<NavLink to='/formulas'><FormattedMessage className="form-container links" id="Form.browse-button" defaultMessage="Browse"/></NavLink>
      </div>
    );
  }
}

export default withRouter((Form));
