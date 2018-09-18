import {isLoading, hasErrored, formulaFetchDataSuccess} from '../actions';
import {formulaCleaner} from '../data-helper/formula-cleaner.js';

export const fetchFormula = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error (response.statusText)
      }
      dispatch(isLoading(false))
      const result = await response.json()
      dispatch(formulaFetchDataSuccess(result))
    } catch (error) {
      dispatch(hasErrored(true))
    }
  }
}