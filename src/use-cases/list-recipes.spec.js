import {makeFakeGiphyRepository, makeFakeRecipesRepository} from '../../../__test__/fixtures/repository'
import {makeRecipe1, makeGiphyResponse1} from '../../../__test__/fixtures/recipe'
import makeRecipe from '../../entity/recipes'
import makeListRecipes from './list-recipes'

describe('get recipes', () => {
  it('should return response body', async () => {
    const ingredients = 'onions, tomato'
    const expectedResponse = {
      "keywords": [
        "onions",
        "tomato"
      ],
      "recipes": [
        {
          "gif": "http://img.recipepuppy.com/560556.jpg",
          "ingredients": [
            "black pepper",
            "cream cheese",
            "eggs",
            "garlic",
            "italian seasoning",
            "milk",
            "olive oil",
            "onions",
            "parmesan cheese",
            "red pepper",
            "salt",
            "tomato",
            "vermicelli",
            "zucchini"
          ],
          "link": "http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=520763",
          "title": "Vegetable-Pasta Oven Omelet"
        }
      ]
    }

    const recipesRepository = makeFakeRecipesRepository({findAll: () => {
      return makeRecipe1()
    }})

    const giphyRepository = makeFakeGiphyRepository({find: () => {
      return makeGiphyResponse1()
    }})


    const listRecipes = makeListRecipes({ recipesRepository, giphyRepository, makeRecipe })    
    const responseBody = await listRecipes({ ingredients })
    expect(responseBody).toEqual(expectedResponse)
  })

  it('should return response body without ingredients', async () => {
    let expectedRecipeResponse = makeRecipe1()
    expectedRecipeResponse.data.results = []
    const recipesRepository = makeFakeRecipesRepository({findAll: () => {
      return expectedRecipeResponse
    }})

    let expectedGiphyResponse = makeGiphyResponse1()
    expectedGiphyResponse.data.data = []
    const giphyRepository = makeFakeGiphyRepository({find: () => {
      return expectedGiphyResponse
    }})


    const listRecipes = makeListRecipes({ recipesRepository, giphyRepository, makeRecipe })    
    const responseBody = await listRecipes({})

    expect(responseBody).toEqual({'keywords': [], 'recipes': []})
  })
})
