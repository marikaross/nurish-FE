export const addFormulas = (formulas) => {
  type: 'ADD_FORMULAS',
  formulas
}

export const formulaFetchDataSuccess = (formulas) => {
  type: 'FORMULA_FETCH_DATA_SUCCESS',
  formulas
}