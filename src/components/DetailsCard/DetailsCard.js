import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import './DetailsCard.css';

let features ={ 
	"Caloric Density": "1.0 Cal/ml",
	"Protein": "17%",
	"Carbohydrate": "Many",
	"Fat": "so much"
};

let nutritionalContent= {
  "Calories": {
    "7 g*": 25,
    "% Daily Value": ""
  },
  "Fat": {
    "7 g*": "0 g",
    "% Daily Value": "0%"
  },
  "Sodium": {
    "7 g*": "15 mg",
    "% Daily Value": "1%"
  },
  "Potassium": {
    "7 g*": "35 mg",
    "% Daily Value": "2%"
  },
  "Carbohydrate": {
    "7 g*": "0 g",
    "% Daily Value": "0%"
  },
  "Protein": {
    "7 g*": "6 g",
    "% Daily Value": ""
  },
  "Calcium": {
    "7 g*": "",
    "% Daily Value": "2%"
  },
  "Limitations": "Not a significant source of saturated fat, trans fat, cholesterol, fibre, sugars, vitamin A, vitamin C, or iron.",
  "Serving size": "* 1 scoop or packet"
};

class DetailsCard extends Component {

  componentDidMount() {
    this.props.animateLogo('collapse-logo')
  }

  componentWillUnmount() {
    this.props.animateLogo('expand-logo')
  }
	
	usageGuidelines = () => {
    return this.props.formula.usage.split(',').map(use => {
      return (
          <li>{use}</li>
        );
    });
  };

  featuresTable = () => {
		return Object.keys(features).map(feature => {
			return (
				<li>{feature}: {features[feature]}</li>
			);
		});
  };

  nutritionalHeaders = () => {
  	let nutrients = Object.keys(nutritionalContent);
  	let headers = Object.keys(nutritionalContent[nutrients[0]])
  	return headers.map((nutrientHeader, index) => {
      let className = `nutrient-header-${index + 1}`
  		return (
  			<span className={className}>{nutrientHeader}</span>
  		);
  	});
  };

  nutritionalTable = () => {
  	return Object.keys(nutritionalContent).map(nutrient => {
  		if (typeof nutritionalContent[nutrient] === 'object') {
	  		var content = Object.keys(nutritionalContent[nutrient]).map(unit => {
	  			return (
	  				<span>
	  					{nutritionalContent[nutrient][unit]}
	  				</span>
	  			);
	  		});
  		} else {
  			return <span className='serving-size'>{nutrient}: {nutritionalContent[nutrient]}</span>	
  		};

		return (
			<li className='nutrient-row'>
  			<span className>
  				{nutrient}:
  			</span>
  				{content}
			</li>
			);
  	});
  };

  render() {
    return (
      <div className='details-card'>
        <div className='link-container'>
          <a onClick={this.props.history.goBack}>back</a>
          <NavLink to='/search'>search</NavLink>
          <NavLink to='/filter'>filter</NavLink>
          <NavLink to='/formulas'>browse</NavLink>
        </div>
        <div className='single-card'>
        	<h1 className='formula-title'>{this.props.formula.title}</h1>
        	<img className='formula-image' alt='' src='https://github.com/jeremiahjstanley/pattrn-party/blob/master/css-resources/placeholder.png?raw=true'/>
        	<p className='single-formula-description'>
        		{this.props.formula.description}
        	</p>
          <p className='single-formula-restrictions'>
            <strong>{this.props.formula.restrictions}</strong>
          </p>
        	<h2 className='nutritional-management-header'>
        		for the nutritional management of:
        	</h2>
        	<ul className='usage-guidelines'>
        		{this.usageGuidelines()}
    			</ul>
    			<h2 className='features-header'>
    				features at a glance:
    			</h2>
    			<ul className='features-table'>
    				{this.featuresTable()}
    			</ul>
    			<h2 className='nutritional-information-header'>
    				nutritional information:
    			</h2>
    			<ul className='nutritional-information'>
    				 <span className='nutrient-headers'>{this.nutritionalHeaders()}</span>
    				{this.nutritionalTable()}
    			</ul>
    			<p className='ingredients-text'><span className='ingredients-title'><strong>ingredients: </strong></span>
    				{this.props.formula.ingredients}
    			</p>
        </div>
      </div>
    ); 
  }
};

export default withRouter(DetailsCard);