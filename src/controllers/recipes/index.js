import makeGetRecipes from './get-recipes'
  
  
  const getRecipes = makeGetRecipes({
    listRecipes: () => {return []}
  })
  
  const recipeController = Object.freeze({
    getRecipes
  })
  
  export { recipeController }
  