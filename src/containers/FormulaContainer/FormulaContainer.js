import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { formulas } from '../../data-helper/mockFormula.js';
import { FormulaCard } from '../../components/FormulaCard/FormulaCard';
import './FormulaContainer.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


export class FormulaContainer extends Component{


  FormulaCards = () => {
    console.log(formulas)

    return formulas.map(formula => {
      return (
        <FormulaCard
          key={formula.id}
          {...formula}
        />
        )
    })
  }

  render() {
  	return (
  		<div className='form-container formula-container'>
        <div className='link-container'>
          <NavLink to='/'>back</NavLink>
  			  <NavLink to='/search'>search</NavLink>
          <NavLink to='/filter'>filter</NavLink>
        </div>
        {this.FormulaCards()}
  		</div>
  	)
  }
}

export const mapStateToProps = (state) => {
  formulas: state.formulas
}

export default withRouter(connect(mapStateToProps, null)(FormulaContainer));
