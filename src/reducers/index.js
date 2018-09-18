import { combineReducers } from 'redux';
import { formulaReducer, isLoading, hasErrored } from './formulaReducer';
import { filterReducer } from './filterReducer';

export const rootReducer = combineReducers({
  formulas: formulaReducer,
  filterResults: filterReducer,
  isLoading,
  hasErrored
});