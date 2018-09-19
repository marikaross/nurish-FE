import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import FormulaContainer from '../FormulaContainer/FormulaContainer';
import DetailsCard from '../../components/DetailsCard/DetailsCard';
import { fetchFormula } from '../../thunks/fetchFormula.js';
import Load from '../../components/Loader/Loader';
import { addFormulas } from '../../actions';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import Form from '../Form/Form';
import './App.css';

export class App extends Component {
  constructor() {
    super();

      this.state = {
        position: 'initial-logo'
      };
  }

  async componentDidMount() {
    const url = `https://nurish-app.herokuapp.com/api/v1/formulas`;
    await this.props.fetchFormula(url);
  }

  animateLogo = (position) => {
    switch (position) {
      case 'collapse-logo':
        this.setState({position});
        break;
      case 'expand-logo':
        this.setState({position});
        break;
      default:
        this.setState({position: 'expand-logo'});
    }
  }

  render() {
    const classes = `nurish-logo ${this.state.position}`;
    return (
      <div className='app'>
        <img className={classes} alt='nurish-logo' src='/images/nurish-logo.gif'/>
        { this.props.isLoading ?  <Load/> : ''}
        <Route exact path='/' component={Form}/>
        <Route exact path='/filter' component={Filter}/>
				<Route exact path='/search' component={Search}/>
				<Route exact path='/formulas' render={() => <FormulaContainer animateLogo={this.animateLogo} />}/>
        <Route exact path='/formulas/:id' render={({ match }) => {
          const formula = this.props.formulas.find(formula => formula.id === parseInt(match.params.id, 10));
          return (
            <div>
              <DetailsCard formula={formula} animateLogo={this.animateLogo}/>
            </div>
          );
        }}/>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  formulas: state.formulas,
  isLoading: state.isLoading,
  hasErrored: state.hasErrored
});

export const mapDispatchToProps = (dispatch) => ({
  addFormulas: (formulas) => dispatch(addFormulas(formulas)),
  fetchFormula: (url) => dispatch(fetchFormula(url))
});

App.propTypes = {
  formulas: PropTypes.array,
  fetchFormula: PropTypes.func,
  isLoading: PropTypes.bool,
  formula: PropTypes.object,
  addFormulas: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
