import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { Dropdown, Input, Button } from 'semantic-ui-react';
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
		let specialtyParam = specialtyQuery.length ? '&specialty=' : '';
		let mctParam = allergenQuery.length ? '&mct_lct=' : '';
		let url = `https://nurish-app.herokuapp.com/api/v1/formulas?${allergenParam}${allergenQuery}${specialtyParam}${specialtyQuery}${mctParam}${mctQuery}`
		const response = await fetch(url)
		return await response.json()
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

export default withRouter(Filter);