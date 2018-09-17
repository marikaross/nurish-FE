export const addFormulas = (formulas) => ({
  type: 'ADD_FORMULAS',
  formulas
})

export const addFilterResults => (filterResults) => ({
  type: "ADD_FILTER_RESULTS",
  filterResults
}) 

export const formulaFetchDataSuccess = (formulas) => ({
  type: 'FORMULA_FETCH_DATA_SUCCESS',
  formulas
})

export const filterResultFetchDataSuccess = (results) => ({
  type: 'FILTER_RESULT_FETCH_DATA_SUCCESS',
  results
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const hasErrored = (bool) => ({
  type: 'HAS_ERRORED',
  hasErrored: bool
})