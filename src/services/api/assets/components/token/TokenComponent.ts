import axios from 'axios'
import { ApiResponse, Token } from '../../../../../types/Types'
import { ApiComponent } from '../../ApiComponent'
import { __NO_PROPS } from '../../IApiComponent'
import { RefreshComponent } from './refresh/RefreshComponent'

type __GET_PROPS = __NO_PROPS
type __POST_PROPS = {
  username: string
  password: string
}
type __PUT_PROPS = __NO_PROPS
type __PATCH_PROPS = __NO_PROPS
type __DEL_PROPS = __NO_PROPS

export class TokenComponent extends ApiComponent<
  Token,
  __GET_PROPS,
  __POST_PROPS,
  __PUT_PROPS,
  __PATCH_PROPS,
  __DEL_PROPS
> {
  refresh: RefreshComponent

  constructor() {
    super('token/')
    this.refresh = new RefreshComponent(this.url)
  }

  post = async ({ username, password }: __POST_PROPS): Promise<ApiResponse<Token>> => {
    const postToken = async (): Promise<Token> => {
      const response = await axios.post(this.url, {
        username: username,
        password: password
      })

      return response.data
    }

    return super.apiRequest(postToken, 'get: token')
  }

  get = undefined
  put = undefined
  patch = undefined
  del = undefined
}
