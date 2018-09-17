import { filterResultFetchDataSuccess} from '../actions';

export const filterReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_RESULTS":
      return [...state, ...action.results]
    case 'FILTER_RESULT_FETCH_DATA_SUCCESS':
      return action.results
    default: return state
  }
}

