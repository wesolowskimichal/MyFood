import { GenericTypes } from '../../../../../types/Types'
import { ApiComponent } from '../../ApiComponent'
import { __NO_PROPS } from '../../IApiComponent'
import { ProductIdComponent } from './ProductIdComponent'

type __GET_PROPS = __NO_PROPS
type __POST_PROPS = __NO_PROPS
type __PUT_PROPS = __NO_PROPS
type __PATCH_PROPS = __NO_PROPS
type __DEL_PROPS = __NO_PROPS

export class ProductComponent extends ApiComponent<
  null,
  __GET_PROPS,
  __POST_PROPS,
  __PUT_PROPS,
  __PATCH_PROPS,
  __DEL_PROPS
> {
  constructor() {
    super('product/')
  }

  public id(id: GenericTypes['id']): ProductIdComponent {
    return new ProductIdComponent(this.url, id)
  }

  get = undefined
  post = undefined
  put = undefined
  patch = undefined
  del = undefined
}
