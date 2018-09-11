import { combineReducers } from 'redux';
import { formulaReducer } from './formulaReducer'

export const rootReducer = combineReducers({
  formulas: formulaReducer
})