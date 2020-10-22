export default function makeRepository ({axios}) {

    return Object.freeze({
        get
    })
  
    async function get({url} = {}) {
      try {
        const response = await axios.get(url);
        return response
      } catch (error) {
        throw Error(error)
      }
    }
  }
  