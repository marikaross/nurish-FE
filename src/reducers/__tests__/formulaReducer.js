import { formulaReducer, isLoading, hasErrored } from '../formulaReducer';
import * as action from '../../actions';

describe('formulaReducer', () => {

  it('should return the initial state when the action is undefined', () => {
    const expected = [];
    const result = formulaReducer([], {});
    expect(result).toEqual(expected);
  });

  it('should add formulas to the state when the type is ADD_FORMULAS', () => {
    const initialState = [];
    const formulas = [{title: 'Beneprotein'}];
    const expected = [...formulas];
    const result = formulaReducer(initialState, action.addFormulas(formulas));
    expect(result).toEqual(expected);
  });

  it('should return the formulas state when the type is FORMULA_FETCH_DATA_SUCCESS', async () => {
    const initialState = [];
    const formulas = [{name: 'Boost Pudding'}];
    const expected = [...formulas];
    const result = await formulaReducer(initialState, action.formulaFetchDataSuccess(formulas));
    expect(result.toEqual(expected));
  });
});

describe('isLoading', () => {
  it('should return a boolean', () => {
    const expected = false;
    const result = isLoading(false, action.isLoading);
    expect(result).toEqual(expected);
  });
});

describe('hasErrored', () => {
  it('should return a boolean', () => {
    const expected = false;
    const result = hasErrored(false, action.hasErrored);
    expect(result).toEqual(expected);
  });
});
