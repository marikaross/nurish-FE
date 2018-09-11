import React from 'react';


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
      <h2>{formula.title}</h2>
      <h4>{formula.description}</h4>
      <h4>usage: {usageGuidelines()}</h4>
    </div>
    )
}