export default function buildMakeRecipe ({}) {

    return function makeRecipe ({
      title,
      ingredients,
      link,
      gif
    } = {}) {
      if (!title) {
        throw new Error('Recipe must have a title.')
      }
      if (!ingredients) {
        throw new Error("Recipe must have ingredients.")
      }
      if (!link) {
        throw new Error('Recipe must contain a link.')
      }
  
      let sanitizedTitle = title.trim()
  
      return Object.freeze({
        getTitle: () => sanitizedTitle,
        getIngredients: () => ingredients,
        getLink: () => link,
        getGif: () => gif,
        getJson: () => getJson()
      })
  
      function getJson() {
        return {
          title: sanitizedTitle,
          ingredients,
          link,
          gif
        }
      }
  
    }
  }
  