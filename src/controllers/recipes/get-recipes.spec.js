import makeGetRecipes from './get-recipes'

describe('list recipe controller', () => {
  it('successfully list recipes', async () => {
    const expectedResponse = {
        'keywords': ['onion'],
        'recipes': []
    }

    const getRecipes = makeGetRecipes({ listRecipes: () => {
        return expectedResponse
    }})
    const request = {
        query: {
            i: 'onions'
        }
    }
    const expected = {
      headers: {
        'Content-Type': 'application/json',
      },
      statusCode: 200,
      body: expectedResponse
    }
    const response = await getRecipes(request)
    expect(response).toEqual(expected)
  })
  it('error in list recipes', async () => {
    const getRecipes = makeGetRecipes({ listRecipes: () => {
        throw Error('Pow!')
    }})
    const request = {
        query: {
            i: 'onions'
        }
    }
    const expected = {
      headers: {
        'Content-Type': 'application/json',
      },
      statusCode: 400,
      body: { error: 'Pow!' }
    }
    const response = await getRecipes(request)
    expect(response).toEqual(expected)
  })
})
