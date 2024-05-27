import axios from 'axios'
import { __NO_PROPS } from '../../../IApiComponent'
import { IdComponent } from '../../../IdComponent'
import { ApiResponse, GenericTypes } from '../../../../../../types/Types'

type __POST_PROPS = __NO_PROPS
type __PUT_PROPS = __NO_PROPS
type __PATCH_PROPS = __NO_PROPS
type __DEL_PROPS = __NO_PROPS

export class LikeIdComponent extends IdComponent<boolean, __POST_PROPS, __PUT_PROPS, __PATCH_PROPS, __DEL_PROPS> {
  constructor(parentUrl: string, id: GenericTypes['id']) {
    super(parentUrl, id)
  }

  post = async (): Promise<ApiResponse<boolean>> => {
    const postLike = async () => {
      const config = await super.getConfig()
      const response = await axios.post(this.url, config)
      return response.data
    }

    return super.apiRequest(postLike, 'post: like')
  }

  put = undefined
  patch = undefined
  del = undefined
}
