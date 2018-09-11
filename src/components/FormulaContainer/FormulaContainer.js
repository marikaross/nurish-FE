import React from 'react'
import { withRouter, NavLink } from 'react-router-dom';



const FormulaContainer = () => {
	return (
		<div>
			<NavLink to='/'>back</NavLink>
			<NavLink to='/search'>search</NavLink>
			<NavLink to='/calculate'>calculate</NavLink>
			<p>I'm a formula container</p>
		</div>
	)
}

export default withRouter(FormulaContainer);