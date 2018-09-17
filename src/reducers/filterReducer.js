import {addFilterResults, filterResultFetchDataSuccess} from '../actions';

export const filterReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_FILTER_RESULTS":
      return [...state, ...action.filterResults]
    case 'FILTER_RESULT_FETCH_DATA_SUCCESS':
      return action.filterResults
    default: return state
  }
}

