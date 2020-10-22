export function makeFakeRecipesRepository ({findAll}) {
    return Object.freeze({
      findAll
    })
}

export function makeFakeGiphyRepository ({find}) {
    return Object.freeze({
      find
    })
}

export function makeFakeRepository ({get}) {
  return Object.freeze({
    get
  })
}