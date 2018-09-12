import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Dropdown, Input, Button, Select } from 'semantic-ui-react';
import './Search.css';

const options = [
  { key: 'name', text: 'name', value: 'name' },
  { key: 'HPCP', text: 'HPCP', value: 'HPCP' },
  { key: 'allergen', text: 'allergen', value: 'allergen' },
]

class Search extends Component {
	constructor() {
		super()

		this.state = {
			input: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()
		console.log(event)
	}


	render() {
		return (
			<div className='form-container search-container'>
				<div className='link-container'>
					<NavLink to='/'>back</NavLink>
					<NavLink to='/filter'>filter</NavLink>
					<NavLink to='/browse'>browse</NavLink>
				</div>
				<form className='search-field' onSubmit={this.handleSubmit}>
				  <Input type='text' placeholder='enter your criteria' action>
				    <input />
				    <Select compact options={options} defaultValue='name' />
				    <Button type='submit'>Search</Button>
				  </Input>
				</form>
			</div>
		)
	}
}

export default withRouter(Search);