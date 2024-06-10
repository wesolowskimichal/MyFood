import axios from 'axios'
import { ApiResponse, GenericTypes, Recipe } from '../../../../../types/Types'
import { __NO_PROPS } from '../../IApiComponent'
import { IdComponent } from '../../IdComponent'

type __POST_PROPS = __NO_PROPS

type __PUT_PROPS = {
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

type __PATCH_PROPS = {
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

type __DEL_PROPS = __NO_PROPS

export class RecipeIdComponent extends IdComponent<Recipe, __POST_PROPS, __PUT_PROPS, __PATCH_PROPS, __DEL_PROPS> {
  constructor(parentUrl: string, id: GenericTypes['id']) {
    super(parentUrl, id)
  }

  put = async (recipe: __PUT_PROPS): Promise<ApiResponse<Recipe>> => {
    const putRecipe = async () => {
      const config = await super.getConfig(true)
      const requestData = new FormData()
      requestData.append('name', recipe.name)
      requestData.append('description', recipe.description)
      if (recipe.shared) requestData.append('shared', 'true')
      else requestData.append('shared', 'false')
      requestData.append('products', JSON.stringify(recipe.products))
      requestData.append('preparation', recipe.preparation)
      requestData.append('time', recipe.time.toString())
      requestData.append('difficulty', recipe.difficulty)
      requestData.append('servings', recipe.servings.toString())
      requestData.append('picture', recipe.picture)
      const response = await axios.put(this.url, requestData, config)
      return response.data
    }

    return super.apiRequest(putRecipe, 'put: recipe')
  }

  patch = async (recipe: __PATCH_PROPS): Promise<ApiResponse<Recipe>> => {
    const patchRecipe = async () => {
      const config = await super.getConfig(true)
      const requestData = new FormData()
      if (recipe.name) requestData.append('name', recipe.name)
      if (recipe.description) requestData.append('description', recipe.description)
      if (recipe.shared !== undefined) {
        if (recipe.shared) requestData.append('shared', 'true')
        else requestData.append('shared', 'false')
      }
      if (recipe.products) requestData.append('products', JSON.stringify(recipe.products))
      if (recipe.preparation) requestData.append('preparation', recipe.preparation)
      if (recipe.time) requestData.append('time', recipe.time.toString())
      if (recipe.difficulty) requestData.append('difficulty', recipe.difficulty)
      if (recipe.servings) requestData.append('servings', recipe.servings.toString())
      if (recipe.picture) requestData.append('picture', recipe.picture)
      const response = await axios.put(this.url, requestData, config)
      return response.data
    }

    return super.apiRequest(patchRecipe, 'patch: recipe')
  }

  del = async (): Promise<ApiResponse<null>> => {
    const delRecipe = async () => {
      const config = await super.getConfig()
      const response = await axios.delete(this.url, config)
      return response.data
    }

    return super.apiRequest(delRecipe, 'del: recipe')
  }
  post = undefined
}
