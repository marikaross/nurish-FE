import {addFormulas, formulaFetchDataSuccess} from '../actions';

export const formulaReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FORMULAS':
      return [...state, ...action.formulas]
    case 'FORMULA_FETCH_DATA_SUCCESS':
      return action.formulas
  default:
    return state
  }
}