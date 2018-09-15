import { combineReducers } from 'redux';
import { formulaReducer, isLoading, hasErrored } from './formulaReducer'

export const rootReducer = combineReducers({
  formulas: formulaReducer,
  isLoading,
  hasErrored
})