import makeRecipesRepository from './recipes-repository'
import repository from '../repository'

const recipesRepository = makeRecipesRepository({repository})
export default recipesRepository
