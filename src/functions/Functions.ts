import { GenericTypes } from '../types/Types'

const { proxy } = require('../../package.json')

export const convertApiUrl = (url: GenericTypes['url']) => {
  return url.replace('http://127.0.0.1:8000/', proxy)
}
