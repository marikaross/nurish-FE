import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FormulaCard.css'


export const FormulaCard = (formula) => {

  const usageGuidelines = () => {
    return formula.usage.map(usage => {
      return (
          <h5>{usage}</h5>
        )
    })
  }
  return (
    <div className='formula-card' key={formula.id}>
      <Link to={`/${formula.id}`}>
        <h2>{formula.title}</h2>
        <h4>{formula.description}</h4>
        <h4>usage: {usageGuidelines()}</h4>
      </Link>
    </div>
    )
}

FormulaCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  usage: PropTypes.array
}