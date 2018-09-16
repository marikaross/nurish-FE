import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FormulaCard.css';


export const FormulaCard = (formula) => {

  const usageGuidelines = () => {
    let usageArray = formula.usage.split(',')
    return usageArray.map(usage => {
      return (
        <li key={formula.id}>{usage}</li>
      );
    });
  };

  return (
    <Link className="formula-link" to={`/browse/${formula.id}`}>
      <div className='formula-card' key={formula.id}>
        <h2>{formula.name}</h2>
        <h4>{formula.description}</h4>
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