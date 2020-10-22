import {makeRecipe1} from '../../../__test__/fixtures/recipe'
import {makeFakeRepository} from '../../../__test__/fixtures/repository'
import makeRecipesRepository from './recipes-repository'

describe('recipes repository', () => {
  it('200 get recipes', async () => {
    const expectedResponse = makeRecipe1()
    const repository = makeFakeRepository({ get: () => {
        return expectedResponse
    }})

    const recipeRepository = makeRecipesRepository({ repository })
    
    const response = await recipeRepository.findAll({})
    expect(response).toEqual(expectedResponse)
  })
})
