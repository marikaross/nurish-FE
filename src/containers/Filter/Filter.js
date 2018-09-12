import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { Dropdown, Input, Button } from 'semantic-ui-react';
import './Filter.css'

const specialties = [{ key: 'VHP', value: 'High Protein', text: 'Very High Protein (VHP)'}]
const allergies = [{ key: 'Gluten', value: 'Wheat', text: 'Wheat and/or Gluten'}]

class Filter extends Component {
	constructor() {
		super()

		this.state = {
			input: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()
		console.log('potato')
	}


	render() {
		return (
			<div className='form-container filter-container'>
				<div className='link-container'>
					<NavLink to='/'>back</NavLink>
					<NavLink to='/search'>search</NavLink>
					<NavLink to='/browse'>browse</NavLink>
				</div>
				<form className='filter-form' onSubmit={this.handleSubmit}>
				<Dropdown placeholder='specialty' fluid multiple search selection options={specialties} />
				<Dropdown placeholder='allergies' fluid multiple search selection options={allergies} />
				<Input list='mct splits' placeholder='mct split' />
    			<datalist id='mct splits'>
      			<option value='50:10:40' />
     				<option value='30:40:30' />
      			<option value='20:20:10' />
    			</datalist>
    		<Button fluid>Search</Button>
				</form>
			</div>
		)
	}
}

export default withRouter(Filter);