import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FormulaCard.css';

export const FormulaCard = (formula) => {

  const usageGuidelines = () => {
    let usageArray = formula.usage.split(',')
    return usageArray.map(usage => {
      return (
        <li key={`formula-card-${formula.id}-/${usage}`}>{usage}</li>
      );
    });
  };

  return (
    <Link className="formula-link" to={`/browse/${formula.id}`}>
      <div className='formula-card' key={`formula-card-${formula.id}`}>
        <h2>{formula.name}</h2>
        <div className='box'>
          <p className='line-clamp-box' id='paragraph'>{formula.description}</p>
        </div>
        <ul>usage: {usageGuidelines()}</ul>
      </div>
    </Link>
  );
};

FormulaCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  usage: PropTypes.array
};