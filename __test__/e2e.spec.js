import axios from 'axios'

describe('Recipes API', () => {
  beforeAll(() => {
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    axios.defaults.validateStatus = function (status) {
      return status < 500
    }
  })
  
  it('list recipe api with params', async () => {
    const response = await axios.get('/recipes/?i=onions,tomato')
    expect(response.status).toBe(200)
  })

  it('list recipe api without params', async () => {
    const response = await axios.get('/recipes/')
    expect(response.status).toBe(200)
  })
})
