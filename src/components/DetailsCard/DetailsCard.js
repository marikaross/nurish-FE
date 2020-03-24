import React, { Component } from "react";
import { connect } from "react-redux";
import Load from "../Loader/Loader";
import { withRouter, NavLink } from "react-router-dom";
import { fetchSingleFormula } from "../../thunks/fetchSingleFormula.js";
import PropTypes from "prop-types";
import "./DetailsCard.css";

export class DetailsCard extends Component {
  constructor() {
    super();

    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    if (props.formula) {
      return {
        formula: props.formula
      };
    } else return state;
  }

  async componentDidMount() {
    let id = new URL(window.location.href);
    let url = `https://nurish-app.herokuapp.com/api/v1${id.pathname}`;
    await this.props.fetchSingleFormula(url);
    this.props.animateLogo("collapse-logo");
  }

  componentWillUnmount() {
    this.props.animateLogo("expand-logo");
  }

  usageGuidelines = () => {
    return this.state.formula.usage.split(",").map(use => {
      return <li key={use}>{use}</li>;
    });
  };

  featuresTable = () => {
    return Object.keys(this.state.formula.formula_overview).map(feature => {
      if (typeof this.state.formula.formula_overview[feature] === "string") {
        let regex = /_/gi;
        let featureName = feature.replace(regex, " ");
        return (
          <li key={featureName}>
            {featureName}: {this.state.formula.formula_overview[feature]}
          </li>
        );
      }
    });
  };

  nutritionalHeaders = () => {
    let nutrients = Object.keys(
      this.state.formula.nutritional_content.properties
    );
    let headers = Object.keys(
      this.state.formula.nutritional_content.properties[nutrients[0]]
    );
    return headers.map((nutrientHeader, index) => {
      let className = `nutrient-header-${index + 1}`;
      return (
        <span className={className} key={nutrientHeader}>
          {nutrientHeader}
        </span>
      );
    });
  };

  nutritionalTable = () => {
    return Object.keys(this.state.formula.nutritional_content.properties).map(
      nutrient => {
        if (
          typeof this.state.formula.nutritional_content.properties[nutrient] ===
          "object"
        ) {
          var content = Object.keys(
            this.state.formula.nutritional_content.properties[nutrient]
          ).map(unit => {
            return (
              <span key={nutrient}>
                {
                  this.state.formula.nutritional_content.properties[nutrient][
                    unit
                  ]
                }
              </span>
            );
          });
        } else {
          return (
            <span className="serving-size" key={nutrient}>
              {nutrient}:{" "}
              {this.state.formula.nutritional_content.properties[nutrient]}
            </span>
          );
        }

        return (
          <li className="nutrient-row" key={nutrient}>
            <span>{nutrient}:</span>
            {content}
          </li>
        );
      }
    );
  };

  render() {
    if (this.state.formula.usage) {
      let url = `/images/${this.props.formula.image}`;
      return (
        <div className="details-card">
          <div className="link-container">
            <a onClick={this.props.history.goBack}>back</a>
            <NavLink to="/search">search</NavLink>
            <NavLink to="/filter">filter</NavLink>
            <NavLink to="/formulas">browse</NavLink>
          </div>
          <div className="single-card">
            <h1 className="formula-title">{this.props.formula.title}</h1>
            <div
              className="formula-image"
              alt=""
              style={{ backgroundImage: `url(${url})` }}
            />
            <p className="single-formula-description">
              {this.props.formula.description}
            </p>
            <p className="single-formula-restrictions">
              <strong>{this.props.formula.restrictions}</strong>
            </p>
            <h2 className="nutritional-management-header">
              for the nutritional management of:
            </h2>
            <ul className="usage-guidelines">{this.usageGuidelines()}</ul>
            <h2 className="features-header">features at a glance:</h2>
            <ul className="features-table">{this.featuresTable()}</ul>
            <h2 className="nutritional-information-header">
              nutritional information:
            </h2>
            <ul className="nutritional-information">
              <span className="nutrient-headers">
                {this.nutritionalHeaders()}
              </span>
              {this.nutritionalTable()}
            </ul>
            <p className="ingredients-text">
              <span className="ingredients-title">
                <strong>ingredients: </strong>
              </span>
              {this.props.formula.ingredients}
            </p>
          </div>
        </div>
      );
    } else return <Load />;
  }
}

export const mapStateToProps = state => ({
  formula: state.singleFormula
});

export const mapDispatchToProps = dispatch => ({
  fetchSingleFormula: url => dispatch(fetchSingleFormula(url))
});

DetailsCard.propTypes = {
  fetchSingleFormula: PropTypes.func,
  animateLogo: PropTypes.func,
  formula: PropTypes.object,
  history: PropTypes.object
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DetailsCard)
);
