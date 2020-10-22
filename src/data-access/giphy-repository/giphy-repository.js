export default function makeGiphyRepository ({repository}) {

    return Object.freeze({
      find
    })
    
    async function find({ title } = {}) {
      let response = repository.get({
        url: `${process.env.GIPHY_API_URL}gifs/search?api_key=${process.env.GIPHY_API_TOKEN}&q=${title}&limit=1`
      })
      return response
    }
  
  }
  