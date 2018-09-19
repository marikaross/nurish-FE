import {isLoading, hasErrored, singleFormulaFetchDataSuccess} from '../actions';

export const fetchSingleFormula = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error (response.statusText)
      }
      dispatch(isLoading(false))
      const result = await response.json()
      dispatch(singleFormulaFetchDataSuccess(result))
    } catch (error) {
      dispatch(hasErrored(true))
    }
  }
}