import buildMakeRecipe from './recipe'

const makeRecipe = buildMakeRecipe({})

describe('recipe', () => {
  it('must have an title', () => {
    expect(() => makeRecipe({})).toThrow('Recipe must have a title.')
  })

  it('must have ingredients', () => {
    expect(() => makeRecipe({
      title: 'mytitle'
    })).toThrow('Recipe must have ingredients.')
  })

  it('must have an link', () => {
    expect(() => makeRecipe({
      title: 'mytitle',
      ingredients: []
    })).toThrow('Recipe must contain a link.')
  })

  it('must sanitize title', () => {
    const expectedTitle = 'mytitle'

    const json = {
      title: '\nmytitle  ',
      ingredients: [],
      link: 'mylink',
      gif: 'mygif'
    }
    const recipe = makeRecipe(json)
    expect(recipe.getTitle()).toStrictEqual(expectedTitle)
  })

  it('must get a json', () => {
    const json = {
      title: 'mytitle',
      ingredients: [],
      link: 'mylink',
      gif: 'mygif'
    }
    const recipe = makeRecipe(json)
    expect(recipe.getJson()).toStrictEqual(json)
  })
})
