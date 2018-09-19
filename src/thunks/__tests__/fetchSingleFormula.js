import { fetchSingleFormula } from '../fetchSingleFormula';
import { isLoading, hasErrored, singleFormulaFetchDataSuccess } from '../../actions';
import { oneFormula } from '../../data-helper/mockFormula.js'

describe('fetchSingleFormula' ,() => {
  let mockUrl
  let mockDispatch

  beforeEach(() => {
  mockUrl = 'www.fakeUrl.com'
  mockDispatch = jest.fn()
  })

  it('should call dispatch with the isLoading action', () => {
    const thunk = fetchSingleFormula(mockUrl)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored(true) if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: false}))
    const thunk = fetchSingleFormula(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(true))
    expect(mockDispatch).not.toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch isLoading(false) if the response is ok',  async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true}))
    const thunk = fetchSingleFormula(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  })

  it('should dispatch singleFormulaFetchDataSuccess if all is well', async () => {
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
    const thunk = fetchSingleFormula(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(singleFormulaFetchDataSuccess(mockOneFormula))
   })
})