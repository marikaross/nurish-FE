import React from 'react';

let formula = {
	usage: ['like', 'eating', 'dear, god', 'let this be over']
}

let ingredients = "WATER, CORN SYRUP, MILK PROTEIN, SUGAR, VEGETABLE OILS (CANOLA, HIGH OLEIC SUNFLOWER AND CORN), SOY PROTEIN, SALT, VITAMINS (VITAMIN A PALMITATE, VITAMIN D3, DL-ALPHA-TOCOPHERYL ACETATE, SODIUM ASCORBATE, ASCORBIC ACID, THIAMINE HYDROCHLORIDE, RIBOFLAVIN, NIACINAMIDE, CALCIUM PANTOTHENATE, PYRIDOXINE HYDROCHLORIDE, BIOTIN, FOLIC ACID, CHOLINE BITARTRATE), MINERALS (SODIUM CITRATE, POTASSIUM CITRATE, POTASSIUM HYDRATE, POTASSIUM CHLORIDE, CALCIUM CARBONATE, TRICALCIUM PHOSPHATE, MAGNESIUM PHOSPHATE, FERROUS SULPHATE, ZINC SULPHATE, MANGANESE SULPHATE, COPPER SULPHATE, POTASSIUM IODIDE, SODIUM SELENITE, SODIUM MOLYBDATE, CHROMIUM TRICHLORIDE), CELLULOSE GEL AND GUM, SOY LECITHIN, FLAVOUR, CARRAGEENAN, STEVIA EXTRACT, DIMETHYLPOLYSILOXANE."


let features ={ 
	"Caloric Density": "1.0 Cal/ml",
	"Protein": "17%",
	"Carbohydrate": "Many",
	"Fat": "so much"
}

let description = 'Beneprotein® instant protein powder is a modular whey protein source. Each 7 g serving provides 6 g of protein. It can be added to most foods, liquids and as a "protein flush" with tube feedings.'

let title = 'BENEPROTEIN®'


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
}

const SingleCard = () => {
	
	const usageGuidelines = () => {
    return formula.usage.map(use => {
      return (
          <li>{use}</li>
        )
    });
  };

  const featuresTable = () => {
		return Object.keys(features).map(feature => {
			return (
				<li>{feature}: {features[feature]}</li>
			)
		});
  };

  const nutritionalHeaders = () => {
  	let nutrients = Object.keys(nutritionalContent)
  	let headers = Object.keys(nutritionalContent[nutrients[0]])
  	return headers.map(nutrientHeader => {
  		return (
  			<span>{nutrientHeader}</span>
  		)
  	});
  };

  const nutritionalTable = () => {
  	return Object.keys(nutritionalContent).map(nutrient => {
  		if (typeof nutritionalContent[nutrient] === 'object') {
	  		var content = Object.keys(nutritionalContent[nutrient]).map(unit => {
	  			return (
	  				<span>
	  					{nutritionalContent[nutrient][unit]}
	  				</span>
	  			)
	  		})
  		} else {
  			return <span>{nutrient}: {nutritionalContent[nutrient]}</span>	
  		}

  		return (
  			<li>
	  			<span className='nutrient-name'>
	  				{nutrient}:
	  			</span>
	  				{content}
  			</li>
  			)
  	})
  }

  return (
    <div className='single-card'>
    	<h1>{title}</h1>
    	<img src='https://github.com/jeremiahjstanley/pattrn-party/blob/master/css-resources/placeholder.png?raw=true'/>
    	<p className='single-formula-description'>
    		{description}
    	</p>
    	<h2 className='nutritional-management-header'>
    		for the nutritional management of:
    	</h2>
    	<ul className='usage-guidelines'>
    		{usageGuidelines()}
			</ul>
			<h2 className='features-header'>
				features at a glance:
			</h2>
			<ul>
				{featuresTable()}
			</ul>
			<h2 className='nutritional-information-header'>
				nutritional information:
			</h2>
			<ul className='nutritional-information'>
				 <span className='nutrient-headers'>{nutritionalHeaders()}</span>
				{nutritionalTable()}
			</ul>
			<p className='ingredients-text'><span className='ingredients-title'>ingredients:</span>
				{ingredients}
			</p>
    </div>
  )
}

export default SingleCard;