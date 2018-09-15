import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink, Route } from 'react-router-dom';
import Form from '../Form/Form';
import Search from '../Search/Search';
import FormulaContainer from '../FormulaContainer/FormulaContainer';
import Calculate from '../Calculate/Calculate';
import SingleCard from '../../components/SingleCard/SingleCard';
import Filter from '../Filter/Filter';
import './App.css';
import PropTypes from 'prop-types';

import { formulas } from '../../data-helper/mockFormula'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <img className='nurish-logo collapse-logo' src='/images/nurish-logo.gif'/>
        <Route exact path='/' component={Form}/>
        <Route exact path='/filter' component={Filter}/>
				<Route exact path='/search' component={Search}/>
				<Route exact path='/calculate' component={Calculate}/>
				<Route exact path='/browse' component={FormulaContainer}/>
        <Route exact path='/browse/:id' render={({ match }) => {
          const formula = formulas.find(formula => formula.id == match.params.id);
          return (
            <div>
              <SingleCard {...formula} />
            </div>
          );
        }}/>
      </div>
    );
  }
}

// App.proptypes = {
//   formulas: PropTypes.array,
// };

export default withRouter((App));
