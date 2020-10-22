import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(bodyParser.json())
app.use((_, res, next) => {
  res.set({ Tk: '!' })
  next()
})

// listen for requests
app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})

export default app
