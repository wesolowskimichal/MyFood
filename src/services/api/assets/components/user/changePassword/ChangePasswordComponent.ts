import axios from 'axios'
import { ApiResponse, ChangePasswordType, Token } from '../../../../../../types/Types'
import { ResponseCode } from '../../../../ResponseCode'
import { ApiComponent } from '../../../ApiComponent'
import { __NO_PROPS } from '../../../IApiComponent'

type __GET_PROPS = __NO_PROPS
type __POST_PROPS = ChangePasswordType
type __PUT_PROPS = __NO_PROPS
type __PATCH_PROPS = __NO_PROPS
type __DEL_PROPS = __NO_PROPS

export class ChangePasswordComponent extends ApiComponent<
  ChangePasswordType,
  __GET_PROPS,
  __POST_PROPS,
  __PUT_PROPS,
  __PATCH_PROPS,
  __DEL_PROPS
> {
  constructor(parentUrl: string) {
    super(parentUrl + 'change-password/', true)
  }

  post = async (passwordPack: __POST_PROPS): Promise<ApiResponse<ChangePasswordType>> => {
    const postChangePassword = async () => {
      const config = await super.getConfig()
      const response = await axios.post(this.url, passwordPack, config)
      return response.data
    }
    return super.apiRequest(postChangePassword, 'post: change password')
  }
  get = undefined
  put = undefined
  patch = undefined
  del = undefined
}
