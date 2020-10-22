import {makeGiphyResponse1} from '../../../__test__/fixtures/recipe'
import {makeFakeRepository} from '../../../__test__/fixtures/repository'
import makeGiphyRepository from './giphy-repository'

describe('giphy repository', () => {
  it('200 get recipes', async () => {
    const expectedResponse = makeGiphyResponse1()
    const repository = makeFakeRepository({ get: () => {
        return expectedResponse
    }})

    const giphyRepository = makeGiphyRepository({ repository })
    
    const response = await giphyRepository.find({})
    expect(response).toEqual(expectedResponse)
  })
})