export const addFormulas = (formulas) => ({
  type: 'ADD_FORMULAS',
  formulas
})

export const formulaFetchDataSuccess = (formulas) => ({
  type: 'FORMULA_FETCH_DATA_SUCCESS',
  formulas
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const hasErrored = (bool) => ({
  type: 'HAS_ERRORED',
  hasErrored: bool
})