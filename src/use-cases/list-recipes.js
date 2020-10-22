export default function makeListRecipes ({ recipesRepository, giphyRepository, makeRecipe }) {
  
    return async function listRecipes ({ ingredients } = {}) {
      const response = await recipesRepository.findAll({ingredients})
      
      const responseBody = await obtainRecipeData({
        data: response.data,
        ingredients
      })
  
      return responseBody
    }
  
    async function obtainRecipeData({ data, ingredients }) {
      ingredients = await formatIngredients(ingredients)
      const recipes = await buildRecipeArray(data.results)  
        
      return {
        'keywords': await orderIngredients({ ingredients }),
        'recipes': recipes
      }
    }
  
    async function formatIngredients(ingredients) {
      if (ingredients) {      
        return ingredients.split(',').map(item=>item.trim())
      }    
      return []
    }
  
    async function buildRecipeArray(results) {
      const recipes = []
  
      await Promise.all(results.map(async (element) => {
        const recipe = makeRecipe({
          title: element.title,        
          link: element.href,
          ingredients: await orderIngredients({
            ingredients: await formatIngredients(element.ingredients)
          }),
          gif: await obtainGifNameByTitle({
            title: element.title.trim()
          })
        })
        
        recipes.push(recipe.getJson())
      }));
  
      return recipes
    }
  
    async function obtainGifNameByTitle({ title }) {
      const response = await giphyRepository.find({title})
      if (response.data.data.length > 0) {      
        return response.data.data[0].url
      }
      return null
    }
  
    async function orderIngredients({ ingredients }) {
      await ingredients.sort(function(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      })
      return ingredients
    }
    
  }
  