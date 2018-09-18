import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { Dropdown, Input, Button } from 'semantic-ui-react';
import { addFilterResults } from '../../actions';
import { fetchResults } from '../../thunks/fetchResults';
import PropTypes from 'prop-types';
import './Filter.css'
import { mctSplit, allergies, specialties } from '../../formData'

class Filter extends Component {
	constructor() {
		super()

		this.state = {
			allergens: [],
			specialty: [],
			mct: []
		}
	}

	handleSubmit = async (event) => {
		event.preventDefault()	
		let allergenQuery = this.state.allergens.length ? this.state.allergens.join() : '';
		let specialtyQuery = this.state.specialty.length ? this.state.specialty.join() : '';
		let mctQuery = this.state.mct.length ? this.state.mct.join() : '';
		let allergenParam = allergenQuery.length ? '&allergens=' : '';
		let specialtyParam = specialtyQuery.length ? '&type=' : '';
		let mctParam = mctQuery.length ? '&mct_lct=' : '';
		let url = `https://nurish-app.herokuapp.com/api/v1/formulas?${allergenParam}${allergenQuery}${specialtyParam}${specialtyQuery}${mctParam}${mctQuery}`
		const response = await this.props.fetchResults(url)
		return response
	}

	handleSpecialty = (event, data) => {
		this.setState({ specialty: [data.value]})
	}

	handleAllergens = (event, data) => {
		this.setState({ allergens: [...data.value]})
	}

	handleMCT = (event, data) => {
		this.setState({ mct: [data.value]})
	}
 
	render() {
		return (
			<div className='form-container filter-container'>
				<div className='link-container'>
					<NavLink to='/'>back</NavLink>
					<NavLink to='/search'>search</NavLink>
					<NavLink to='/formulas'>browse</NavLink>
				</div>
				<form className='filter-form' onSubmit={this.handleSubmit}>
				<Dropdown onChange={this.handleSpecialty} placeholder='specialty' fluid search selection options={specialties}/>
				<Dropdown onChange={this.handleAllergens} placeholder='allergies' fluid multiple search selection options={allergies}/>
				<Dropdown onChange={this.handleMCT} placeholder='mct split' fluid selection options={mctSplit}/>
    		<Button fluid>Search</Button>
				</form>
			</div>
		)
	}
}

export const mapStateToProps = (state) => ({
	filterResults: state.filterResults,
	isLoading: state.isLoading,
  hasErrored: state.hasErrored
});

export const mapDispatchToProps = (dispatch) => ({
	addFilterResults: (filterResults) => dispatch(addFilterResults(filterResults)),
	fetchResults: (url) =>  dispatch(fetchResults(url))

})

Filter.propTypes = {
  filterResults: PropTypes.array,
  fetchResults: PropTypes.func,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Filter));