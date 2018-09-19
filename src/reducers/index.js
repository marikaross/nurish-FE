import { combineReducers } from 'redux';
import { formulaReducer, singleFormulaReducer, isLoading, hasErrored } from './formulaReducer';
import { filterReducer } from './filterReducer';

export const rootReducer = combineReducers({
  formulas: formulaReducer,
  filterResults: filterReducer,
  singleFormula: singleFormulaReducer,
  isLoading,
  hasErrored
});