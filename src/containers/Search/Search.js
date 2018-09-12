import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class Search extends Component {
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
			<div className='form-container'>
				<NavLink to='/browse'>browse</NavLink>
				<form className='search-field' onSubmit={this.handleSubmit}>
					<input placeholder='enter a search criteria'/>
					<button>Search</button>
				</form>
			</div>
		)
	}
}

export default withRouter(Search);