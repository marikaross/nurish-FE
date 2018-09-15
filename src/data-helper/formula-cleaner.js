export const formulaCleaner = (formulaData) => {
  return formulaData.map(formula => {
    return {
            id: formula.id,
            name: formula.title,
            description: formula.description,
            usage: [formula.usage]
          }
  })
}