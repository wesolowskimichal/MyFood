import { ApiResponse, ChangePasswordType, Token, User } from '../../types/Types'
import { TokenComponent } from './assets/components/token/TokenComponent'
import { UserComponent } from './assets/components/user/UserComponent'

export class ApiService {
  private static _tokenComponent: TokenComponent = new TokenComponent()
  private static _userComponent: UserComponent = new UserComponent()

  public static async getToken(username: string, password: string): Promise<ApiResponse<Token>> {
    return this._tokenComponent.post({ username, password })
  }
  //#region API-USER
  public static async getUser(): Promise<ApiResponse<User>>
  public static async getUser(id: User['id']): Promise<ApiResponse<User>>
  public static async getUser(id?: User['id']): Promise<ApiResponse<User>> {
    if (id) {
      return this._userComponent.id(id).get()
    } else {
      return this._userComponent.get()
    }
  }

  public static async changePassword(changePassword: ChangePasswordType) {
    return this._userComponent.changePassword.post(changePassword)
  }

  public static async getUserLikedRecipes(page?: number) {
    if (page) {
      return this._userComponent.likedRecipes.get(page)
    }
    return this._userComponent.likedRecipes.get(0)
  }

  public static async getUserRecipes(page?: number) {
    if (page) {
      return this._userComponent.recipes.get(page)
    }
    return this._userComponent.recipes.get(0)
  }
  //#endregion API-USER
}
