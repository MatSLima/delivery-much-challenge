export default function makeRecipesRepository ({ repository }) {

    return Object.freeze({
      findAll
    })
    
    async function findAll ({ ingredients } = {}) {
      let response = repository.get({
        url: `${process.env.RECIPE_API_URL}?i=${ingredients}`
      })
      return response
    }
  
  }
  