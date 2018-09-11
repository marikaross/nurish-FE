import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import {formulas} from '../../data-helper/mockFormula.js';
import {FormulaCard} from '../FormulaCard/FormulaCard';
import {connect} from 'react-redux'


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
  		<div>
  			<NavLink to='/'>back</NavLink>
  			<NavLink to='/search'>search</NavLink>
  			<NavLink to='/calculate'>calculate</NavLink>
        {this.FormulaCards()}
  		</div>
  	)
  }
}

export const mapStateToProps = (state) => {
  formulas: state.formulas
}

export default withRouter(connect(mapStateToProps, null)(FormulaContainer));