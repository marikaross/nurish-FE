import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { FormulaCard } from '../../components/FormulaCard/FormulaCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './FormulaContainer.css';

export class FormulaContainer extends Component {

  componentDidMount() {
    this.props.animateLogo('collapse-logo');
  }

  componentWillUnmount() {
    this.props.animateLogo('expand-logo');
  }

  filterResultCard = () => {
    return this.props.filterResults.map(formula => {
        return (
          <FormulaCard
            key={formula.id}
            {...formula}
          />
        )
    })
  }

  FormulaCard = () => {
    return this.props.formulas.map(formula => {
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
        <div className='formula-cards'>
          {this.props.filterResults.length ? this.filterResultCard() : this.FormulaCard()}
        </div>
  		</div>
  	)
  }
}

FormulaContainer.propTypes = {
  filterResults: PropTypes.array,
  formulas: PropTypes.array,
  animateLogo: PropTypes.func
};

export const mapStateToProps = (state) => ({
  formulas: state.formulas,
  filterResults: state.filterResults
});

FormulaContainer.propTypes = {
  formulas: PropTypes.arr,
  filterResults: PropTypes.arr
};

export default withRouter(connect(mapStateToProps, null)(FormulaContainer));
