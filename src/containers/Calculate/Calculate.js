import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class Calculate extends Component {
	constructor() {
		super()

		this.state = {
			input: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()
	}


	render() {
		return (
			<div className='form-container'>
				<NavLink to='/search'>search</NavLink>
				<NavLink to='/browse'>browse</NavLink>
				<form className='search-field' onSubmit={this.handleSubmit}>
					<input placeholder='daily caloric needs'/>
					<input placeholder='daily protein needs'/>
					<input placeholder='daily carbohydrate needs'/>
					<input placeholder='daily fats needs'/>
				</form>
			</div>
		)
	}
}

Calculate.propTypes = {
	
}

export default Calculate;