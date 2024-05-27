import axios from 'axios'
import { ApiResponse, Recipe, RecipePage } from '../../../../../types/Types'
import { ApiComponent } from '../../ApiComponent'
import { __NO_PROPS } from '../../IApiComponent'

type __GET_PROPS = number
type __POST_PROPS = Recipe
type __PUT_PROPS = __NO_PROPS
type __PATCH_PROPS = __NO_PROPS
type __DEL_PROPS = __NO_PROPS

export class RecipesComponent extends ApiComponent<
  RecipePage | Recipe,
  __GET_PROPS,
  __POST_PROPS,
  __PUT_PROPS,
  __PATCH_PROPS,
  __DEL_PROPS
> {
  constructor() {
    super('recipes/?page=')
  }

  get = async (page: __GET_PROPS): Promise<ApiResponse<RecipePage>> => {
    const fetchRecipes = async () => {
      const response = await axios.get(`${this.url}${page}`)
      return response.data
    }
    return super.apiRequest(fetchRecipes, 'get: recipes')
  }

  post = async (recipe: Recipe): Promise<ApiResponse<Recipe>> => {
    const postRecipe = async () => {
      const response = await axios.post(this.url, recipe)
      return response.data
    }
    return super.apiRequest(postRecipe, 'post: recipe')
  }

  put = undefined
  patch = undefined
  del = undefined
}
