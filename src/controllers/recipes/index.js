import {
  recipeService,
} from '../../use-cases/recipes'
import makeGetRecipes from './get-recipes'


const getRecipes = makeGetRecipes({
  listRecipes: recipeService.listRecipes
})

const recipeController = Object.freeze({
  getRecipes
})

export { recipeController }
