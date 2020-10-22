import makeListRecipes from './list-recipes'
import makeRecipe from '../../entity/recipes'
import recipesRepository from '../../data-access/recipes-repository'
import giphyRepository from '../../data-access/giphy-repository'

const listRecipes = makeListRecipes({ recipesRepository, giphyRepository, makeRecipe })

const recipeService = Object.freeze({
  listRecipes
})

export { recipeService }
