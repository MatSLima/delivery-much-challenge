export default function makeGetRecipes ({ listRecipes }) {
    return async function getRecipes (httpRequest) {
      const headers = {
        'Content-Type': 'application/json'
      }
      try {      
        const getComments = await listRecipes({
          ingredients: httpRequest.query.i
        })
        return {
          headers,
          statusCode: 200,
          body: getComments
        }
      } catch (e) {      
        return {
          headers,
          statusCode: 400,
          body: {
            error: e.message
          }
        }
      }
    }
  }
  