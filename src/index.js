import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import {
  notFoundController
} from './controllers/not-found'

import {
  recipeController
} from './controllers/recipes'

import makeCallback from './express-callback'

dotenv.config()

const app = express()
app.use(bodyParser.json())
app.use((_, res, next) => {
  res.set({ Tk: '!' })
  next()
})

app.get('/recipes', makeCallback(recipeController.getRecipes))
app.use(makeCallback(notFoundController.notFound))

// listen for requests
app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})

export default app
