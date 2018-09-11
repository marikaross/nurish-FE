export const formulaReducer = (state = [], action.type) => {
  switch(action.type) {
    case ADD_FORMULA:
    return [...state, ...action.formulas]
  default:
  return state
  }
}