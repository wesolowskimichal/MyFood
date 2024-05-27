import { ApiResponse, Token } from '../../../../../../types/Types'
import { ResponseCode } from '../../../../ResponseCode'
import { ApiComponent } from '../../../ApiComponent'
import { __NO_PROPS } from '../../../IApiComponent'

type __GET_PROPS = __NO_PROPS
type __POST_PROPS = {
  refresh: Token['refresh']
}
type __PUT_PROPS = __NO_PROPS
type __PATCH_PROPS = __NO_PROPS
type __DEL_PROPS = __NO_PROPS

export class RefreshComponent extends ApiComponent<
  Token['access'],
  __GET_PROPS,
  __POST_PROPS,
  __PUT_PROPS,
  __PATCH_PROPS,
  __DEL_PROPS
> {
  constructor(parentUrl: string) {
    super(parentUrl + 'access/', true)
  }

  // Implement the post method
  post = async ({ refresh }: __POST_PROPS): Promise<ApiResponse<Token['access']>> => {
    return { data: null, responseCode: ResponseCode.BAD_GATEWAY }
    // Example implementation of the post method
    // if (!postProps?.refresh) {
    //   throw new Error('Refresh token is required')
    // }

    // const response = await fetch(this.url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ refresh: postProps.refresh })
    // })

    // const data = await response.json()
    // return { data: data.access } // Adjust based on your actual API response structure
  }

  // Set other methods to undefined or throw an error to indicate they are not implemented
  get = undefined
  put = undefined
  patch = undefined
  del = undefined
}
