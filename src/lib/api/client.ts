import axios from 'axios'
import applyCaseMiddleware from 'axios-case-converter'

const options = {
  ignoreHeaders: true,
}

const client = applyCaseMiddleware(
  axios.create({
    baseURL: 'http://localhost:8000/api/v1',
  }),
  options
)

export default client
