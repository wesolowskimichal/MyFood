import { ApiResponse, User, GenericTypes } from '../../../../../types/Types'
import { IdComponent } from '../../IdComponent'

export class UserIdComponent extends IdComponent<User, null, null, null, null> {
  constructor(parentUrl: string, id: GenericTypes['id']) {
    super(parentUrl, id)
  }

  post = undefined
  put = undefined
  patch = undefined
  del = undefined
}
