import axios from 'axios'
import { ApiResponse, RecipePage } from '../../../../../../types/Types'
import { ApiComponent } from '../../../ApiComponent'
import { __NO_PROPS } from '../../../IApiComponent'

type __GET_PROPS = number
type __POST_PROPS = __NO_PROPS
type __PUT_PROPS = __NO_PROPS
type __PATCH_PROPS = __NO_PROPS
type __DEL_PROPS = __NO_PROPS

export class LikedRecipesComponent extends ApiComponent<
  RecipePage,
  __GET_PROPS,
  __POST_PROPS,
  __PUT_PROPS,
  __PATCH_PROPS,
  __DEL_PROPS
> {
  constructor(parentUrl: string) {
    super(parentUrl + 'liked-recipes/?page=', true)
  }

  get = async (page: __GET_PROPS): Promise<ApiResponse<RecipePage>> => {
    const getLikedRecipes = async () => {
      const config = await super.getConfig()
      const response = await axios.get(`${this.url}${page}`, config)
      return response.data
    }
    return super.apiRequest(getLikedRecipes, 'get: liked recipes')
  }

  post = undefined
  put = undefined
  patch = undefined
  del = undefined
}
