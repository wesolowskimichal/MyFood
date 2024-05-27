import axios from 'axios'
import { ApiResponse, GenericTypes, User } from '../../../../../types/Types'
import { ApiComponent } from '../../ApiComponent'
import { __NO_PROPS } from '../../IApiComponent'
import { IdComponent } from '../../IdComponent'
import { UserIdComponent } from './UserIdComponent'
import { ChangePasswordComponent } from './changePassword/ChangePasswordComponent'
import { RecipesComponent } from './recipes/RecipesComponent'
import { LikedRecipesComponent } from './recipes/LikedRecipesComponent'

type __GET_PROPS = __NO_PROPS
type __POST_PROPS = __NO_PROPS
type __PUT_PROPS = {
  username: User['username']
  email: User['email']
  first_name: User['first_name']
  last_name: User['last_name']
  picture: File
}
type __PATCH_PROPS = {
  username?: User['username']
  email?: User['email']
  first_name?: User['first_name']
  last_name?: User['last_name']
  picture?: File
}
type __DEL_PROPS = __NO_PROPS

export class UserComponent extends ApiComponent<
  User,
  __GET_PROPS,
  __POST_PROPS,
  __PUT_PROPS,
  __PATCH_PROPS,
  __DEL_PROPS
> {
  changePassword: ChangePasswordComponent
  recipes: RecipesComponent
  likedRecipes: LikedRecipesComponent

  constructor() {
    super('user/')
    this.changePassword = new ChangePasswordComponent(this.url)
    this.recipes = new RecipesComponent(this.url)
    this.likedRecipes = new LikedRecipesComponent(this.url)
  }

  // Get User By Token
  get = async (): Promise<ApiResponse<User>> => {
    const fetchUser = async () => {
      const config = await super.getConfig()
      const response = await axios.get(this.url, config)
      return response.data
    }

    return super.apiRequest(fetchUser, 'get: user')
  }

  // Get User By Id
  public id(id: GenericTypes['id']): UserIdComponent {
    return new UserIdComponent(this.url, id)
  }

  // Change User
  put = async ({ username, first_name, last_name, picture }: __PUT_PROPS): Promise<ApiResponse<User>> => {
    const putUser = async () => {
      const config = await super.getConfig(true)
      const requestData = new FormData()
      requestData.append('username', username)
      requestData.append('first_name', first_name)
      requestData.append('last_name', last_name)
      requestData.append('picture', picture)
      const response = await axios.put(this.url, requestData, config)
      return response.data
    }

    return super.apiRequest(putUser, 'put: user')
  }

  // Update portion of user
  patch = async ({ username, first_name, last_name, picture }: __PATCH_PROPS): Promise<ApiResponse<User>> => {
    const patchUser = async () => {
      const config = await super.getConfig(true)
      const requestData = new FormData()
      if (username) requestData.append('username', username)
      if (first_name) requestData.append('first_name', first_name)
      if (last_name) requestData.append('last_name', last_name)
      if (picture) requestData.append('picture', picture)
      const response = await axios.put(this.url, requestData, config)
      return response.data
    }

    return super.apiRequest(patchUser, 'patch: user')
  }

  del = async (): Promise<ApiResponse<null>> => {
    const deleteUser = async () => {
      const config = await super.getConfig()
      const response = await axios.delete(this.url, config)
      return response.data
    }

    return super.apiRequest(deleteUser, 'delete: user')
  }

  post = undefined
}
