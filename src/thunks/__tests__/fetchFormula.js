import { fetchFormula } from '../fetchFormula';
import { isLoading, hasErrored, formulaFetchDataSuccess } from '../../actions';
import { oneFormula } from '../../data-helper/mockFormula.js'

describe('fetchFormula' ,() => {
  let mockUrl
  let mockDispatch

  beforeEach(() => {
  mockUrl = 'www.fakeUrl.com'
  mockDispatch = jest.fn()
  })

  it('should call dispatch with the isLoading action', () => {
    const thunk = fetchFormula(mockUrl)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored(true) if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: false}))
    const thunk = fetchFormula(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(true))
    expect(mockDispatch).not.toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch isLoading(false) if the response is ok',  async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true}))
    const thunk = fetchFormula(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  })

  it('should dispatch formulaFetchDataSuccess if all is well', async () => {
    const mockOneFormula = [{
      "id": 1,
      "title": "Beneprotein",
      "description": 'Beneprotein instant protein powder is a modular whey protein source. Each 7 g serving provides 6 g of protein. It can be added to most foods, liquids, and as a "protein flush" with tube feedings',
      "usage": ["Increased protein requirements"],
      "ingredients": "WHEY PROTEIN ISOLATE (MILK), SOY LECITHIN",
      "HCPC": "B4155",
      "restrictions": ["CONTAINS MILK AND SOY"]
    }]
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true, 
      json: () => Promise.resolve(oneFormula)
    }))
    const thunk = fetchFormula(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(formulaFetchDataSuccess(mockOneFormula))
   })
})