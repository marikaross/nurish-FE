import {isLoading, hasErrored, filterResultFetchDataSuccess} from '../actions';
import {formulaCleaner} from '../data-helper/formula-cleaner.js';

export const fetchResults = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error (response.statusText)
      }
      dispatch(isLoading(false))
      const result = await response.json()
      dispatch(filterResultFetchDataSuccess(result))
    } catch (error) {
      dispatch(hasErrored(true))
    }
  }
}