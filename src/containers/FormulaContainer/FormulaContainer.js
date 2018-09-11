import React from 'react'
import { withRouter, NavLink } from 'react-router-dom';
import './FormulaContainer.css';



const FormulaContainer = () => {
	return (
		<div className='form-container formula-container'>
			<NavLink to='/'>back</NavLink>
			<NavLink to='/search'>search</NavLink>
			<p>I'm a formula container</p>
		</div>
	)
}

export default withRouter(FormulaContainer);