import { GenericTypes } from '../../../../../types/Types'
import { ApiComponent } from '../../ApiComponent'
import { __NO_PROPS } from '../../IApiComponent'
import { RecipeIdComponent } from './RecipeIdComponent'
import { LikeComponent } from './like/LikeComponent'

type __GET_PROPS = __NO_PROPS
type __POST_PROPS = __NO_PROPS
type __PUT_PROPS = __NO_PROPS
type __PATCH_PROPS = __NO_PROPS
type __DEL_PROPS = __NO_PROPS

export class RecipeComponent extends ApiComponent<
  null,
  __GET_PROPS,
  __POST_PROPS,
  __PUT_PROPS,
  __PATCH_PROPS,
  __DEL_PROPS
> {
  public like: LikeComponent
  constructor() {
    super('recipe/')
    this.like = new LikeComponent(this.url)
  }

  public id(id: GenericTypes['id']): RecipeIdComponent {
    return new RecipeIdComponent(this.url, id)
  }

  get = undefined
  post = undefined
  put = undefined
  patch = undefined
  del = undefined
}
