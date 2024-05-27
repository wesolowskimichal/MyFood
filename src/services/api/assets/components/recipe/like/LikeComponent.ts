import { GenericTypes } from '../../../../../../types/Types'
import { ApiComponent } from '../../../ApiComponent'
import { __NO_PROPS } from '../../../IApiComponent'
import { LikeIdComponent } from './LikeIdComponent'

type __GET_PROPS = __NO_PROPS
type __POST_PROPS = __NO_PROPS
type __PUT_PROPS = __NO_PROPS
type __PATCH_PROPS = __NO_PROPS
type __DEL_PROPS = __NO_PROPS

export class LikeComponent extends ApiComponent<
  null,
  __GET_PROPS,
  __POST_PROPS,
  __PUT_PROPS,
  __PATCH_PROPS,
  __DEL_PROPS
> {
  constructor(parentUrl: GenericTypes['url']) {
    super(parentUrl + 'like/', true)
  }

  public id(id: GenericTypes['id']): LikeIdComponent {
    return new LikeIdComponent(this.url, id)
  }

  get = undefined
  post = undefined
  put = undefined
  patch = undefined
  del = undefined
}
