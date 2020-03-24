export const formulaReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FORMULAS':
      return [...state, ...action.formulas];
    case 'FORMULA_FETCH_DATA_SUCCESS':
      return action.formulas;
  default:
    return state;
  }
};

export const singleFormulaReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SINGLE_FORMULA_FETCH_DATA_SUCCESS':
      return action.formula;
    default:
      return state;
  }
};

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
};

export const hasErrored = (state = false, action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
};