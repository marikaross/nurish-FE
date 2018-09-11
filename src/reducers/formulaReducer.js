import {addFormulas} from '../actions';

export const formulaReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FORMULAS':
    return [...state, ...action.formulas]
  default:
  return state
  }
}