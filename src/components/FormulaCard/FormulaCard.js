import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./FormulaCard.css";

export const FormulaCard = formula => {
  const usageGuidelines = () => {
    let usageArray = formula.usage.split(",");
    return usageArray.map(usage => {
      return <li key={`formula-card-${formula.id}-/${usage}`}>{usage}</li>;
    });
  };

  let url = `/images/${formula.image}`;

  return (
    <Link className="formula-link" to={`/formulas/${formula.id}`}>
      <div className="formula-card" key={`formula-card-${formula.id}`}>
        <h2>{formula.title}</h2>
        <div
          className="formula-card-image"
          alt=""
          style={{ backgroundImage: `url(${url})` }}
        ></div>
        <div className="formula-description">
          <p className="truncate-description">{formula.description}</p>
        </div>
        <p className="usage-header">
          <strong>usage:</strong>
        </p>
        <ul>{usageGuidelines()}</ul>
      </div>
    </Link>
  );
};

FormulaCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  usage: PropTypes.string,
  image: PropTypes.string
};
