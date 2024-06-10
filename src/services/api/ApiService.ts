import {
  ApiResponse,
  ChangePasswordType,
  GenericTypes,
  Product,
  ProductPage,
  Recipe,
  RecipePage,
  Token,
  User
} from '../../types/Types'
import { ProductComponent } from './assets/components/product/ProductComponent'
import { ProductsComponent } from './assets/components/products/ProductsComponent'
import { RecipeComponent } from './assets/components/recipe/RecipeComponent'
import { RecipesComponent } from './assets/components/recipes/RecipesComponent'
import { TokenComponent } from './assets/components/token/TokenComponent'
import { UserComponent } from './assets/components/user/UserComponent'

export class ApiService {
  private static _tokenComponent: TokenComponent = new TokenComponent()
  private static _userComponent: UserComponent = new UserComponent()
  private static _recipesComponent: RecipesComponent = new RecipesComponent()
  private static _recipeComponent: RecipeComponent = new RecipeComponent()
  private static _productsComponent: ProductsComponent = new ProductsComponent()
  private static _productComponent: ProductComponent = new ProductComponent()

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
  //#region API-RECIPES
  public static async getRecipes(page?: number): Promise<ApiResponse<RecipePage>> {
    if (page) {
      return this._recipesComponent.get(page)
    }
    return this._recipesComponent.get(0)
  }

  public static async postRecipe(recipe: Recipe): Promise<ApiResponse<Recipe>> {
    return this._recipesComponent.post(recipe)
  }
  //#endregion
  //#region API-RECIPE
  public static async getRecipe(id: GenericTypes['id']) {
    return this._recipeComponent.id(id).get()
  }

  public static async putRecipe(
    id: GenericTypes['id'],
    recipe: {
      name: Recipe['name']
      description: Recipe['description']
      shared: Recipe['shared']
      products: Recipe['products']
      preparation: Recipe['preparation']
      time: Recipe['time']
      difficulty: Recipe['difficulty']
      servings: Recipe['servings']
      picture: Recipe['picture']
    }
  ) {
    return this._recipeComponent.id(id).put(recipe)
  }

  public static async patchRecipe(
    id: GenericTypes['id'],
    recipe: {
      name?: Recipe['name']
      description?: Recipe['description']
      shared?: Recipe['shared']
      products?: Recipe['products']
      preparation?: Recipe['preparation']
      time?: Recipe['time']
      difficulty?: Recipe['difficulty']
      servings?: Recipe['servings']
      picture?: Recipe['picture']
    }
  ) {
    return this._recipeComponent.id(id).patch(recipe)
  }

  public static async deleteRecipe(id: GenericTypes['id']) {
    return this._recipeComponent.id(id).del()
  }

  public static async likeRecipe(id: GenericTypes['id']) {
    return this._recipeComponent.like.id(id).post()
  }
  //#endregion
  //#region API-PRODUCTS
  public static async getProducts(page?: number): Promise<ApiResponse<ProductPage>> {
    if (page) {
      return this._productsComponent.get(page)
    }
    return this._productsComponent.get(0)
  }

  public static async postProduct(product: Product): Promise<ApiResponse<Product>> {
    return this._productsComponent.post(product)
  }
  //#endregion
  //#region API-PRODUCT
  public static async getProduct(barcode: GenericTypes['id']): Promise<ApiResponse<Product>> {
    return this._productComponent.id(barcode).get()
  }
  //#endregion
}
