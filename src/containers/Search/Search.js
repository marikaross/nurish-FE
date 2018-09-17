import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Dropdown, Input, Button, Select } from 'semantic-ui-react';
import { searchCriteria } from '../../formData'
import './Search.css';

class Search extends Component {
	constructor() {
		super()

		this.state = {
			input: '',
			criteria: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()
	}

	handleChange = (event, data) => {
		this.setState({criteria: data.value})
	}

	handleInput = (input) => {
		this.setState({input})
	}

	render() {		
		return (
			<div className='form-container search-container'>
				<div className='link-container'>
					<NavLink to='/'>back</NavLink>
					<NavLink to='/filter'>filter</NavLink>
					<NavLink to='/formulas'>browse</NavLink>
				</div>
				<form className='search-field' onSubmit={this.handleSubmit}>
					<Input 
				  	type='text'
				  	placeholder='enter your criteria' 
				  	action >
				  	<input onChange={(event) => this.handleInput(event.target.value)} value={this.state.value} name='input'/>
				  	<Select onChange={this.handleChange} defaultValue={'name'} compact options={searchCriteria} name='criteria'/>
				  	<Button type='submit'>Search</Button>
					</Input>
				</form>
			</div>
		)
	}
}

export default withRouter(Search);