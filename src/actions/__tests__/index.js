import * as action from '../index';

describe('actions', () => {
  it('should return a type of ADD_FORMULAS with formulas', () => {
    const formulas = [];
    const expected = {
      type: "ADD_FORMULAS",
      formulas
    };
    const result = action.addFormulas(formulas);
    expect(result).toEqual(expected);
  });

  it('should return a type of IS_LOADING with a boolean value', () => {
    const isLoading = true;
    const expected = {
      type: "IS_LOADING",
      isLoading
    };
    const result = action.isLoading(true);
    expect(result).toEqual(expected);
  });

  it('should return a type of HAS_ERRORED with a boolean value', () => {
    const hasErrored = false;
    const expected = {
      type: "HAS_ERRORED",
      hasErrored
    };
    const result = action.hasErrored(false);
    expect(result).toEqual(expected);
  });

  it('should return a type of FORMULA_FETCH_DATA_SUCCESS and a formulas array', () => {
    const formulas = [{}, {}, {}];
    const expected = {
      type: "FORMULA_FETCH_DATA_SUCCESS",
      formulas
    };
    const result = action.formulaFetchDataSuccess(formulas);
    expect(result).toEqual(expected);
  });

  it('should return a type of FILTER_RESULT_FETCH_DATA_SUCCESS and filterResults array', () => {
    const filterResults = [{}, {}, {}];
    const expected = {
      type: "FILTER_RESULT_FETCH_DATA_SUCCESS",
      filterResults
    };
    const result = action.filterResultFetchDataSuccess(filterResults);
    expect(result).toEqual(expected);
  });

  it('should return a type of SINGLE_FORMULA_FETCH_DATA_SUCCESS and filterResults array', () => {
    const formula = {};
    const expected = {
      type: "SINGLE_FORMULA_FETCH_DATA_SUCCESS",
      formula
    };
    const result = action.singleFormulaFetchDataSuccess(formula);
    expect(result).toEqual(expected);
  });
});