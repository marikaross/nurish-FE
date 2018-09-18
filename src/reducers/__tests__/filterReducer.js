import { filterReducer, isLoading, hasErrored } from '../filterReducer';
import * as action from '../../actions';

describe('filterReducer', () => {

  it('should return the initial state when the action is undefined', () => {
    const expected = [];
    const result = filterReducer([], {});
    expect(result).toEqual(expected);
  });

  it('should add formulas to the state when the type is ADD_FILTER_RESULTS', () => {
    const initialState = [];
    const filterResults = [{title: 'Beneprotein'}, {title: 'Boost'}];
    const expected = [...filterResults];
    const result = filterReducer(initialState, action.addFilterResults(filterResults));
    expect(result).toEqual(expected);
  });

  it('should return the results state when the type is FORMULA_FETCH_DATA_SUCCESS', async () => {
    const initialState = [];
    const filterResults = [{name: 'Boost Pudding'}];
    const expected = [...filterResults];
    const result = await filterReducer(initialState, action.filterResultFetchDataSuccess(filterResults));
    expect(result).toEqual(expected);
  });
});