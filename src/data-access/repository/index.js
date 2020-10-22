import makeRepository from './repository'
import * as axios from 'axios'

const repository = makeRepository({axios})
export default repository
