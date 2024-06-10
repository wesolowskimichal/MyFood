import axios from 'axios'
import { ApiComponent } from '../../ApiComponent'
import { ApiResponse, Product, ProductPage } from '../../../../../types/Types'
import { __NO_PROPS } from '../../IApiComponent'

type __GET_PROPS = number
type __POST_PROPS = Product
type __PUT_PROPS = __NO_PROPS
type __PATCH_PROPS = __NO_PROPS
type __DEL_PROPS = __NO_PROPS

export class ProductsComponent extends ApiComponent<
  ProductPage | Product,
  __GET_PROPS,
  __POST_PROPS,
  __PUT_PROPS,
  __PATCH_PROPS,
  __DEL_PROPS
> {
  constructor() {
    super('products/')
  }

  get = async (page: __GET_PROPS): Promise<ApiResponse<ProductPage>> => {
    const fetchRecipes = async () => {
      const response = await axios.get(`${this.url}?page=${page}`)
      return response.data
    }
    return super.apiRequest(fetchRecipes, 'get: recipes')
  }

  post = async (product: Product): Promise<ApiResponse<Product>> => {
    const postRecipe = async () => {
      const config = await super.getConfig(true)
      const requestData = new FormData()
      requestData.append('barcode', product.barcode)
      requestData.append('name', product.name)
      requestData.append('amount', product.amount.toString())
      requestData.append('unit', product.unit)
      if (product.picture.length !== 0) {
        requestData.append('picture', {
          uri: product.picture,
          name: `picture.${product.picture.split('.').slice(-1)[0]}`,
          type: `image/${product.picture.split('.').slice(-1)[0]}`
        } as any)
      }
      requestData.append('carbons', product.carbons.toString())
      requestData.append('fat', product.fat.toString())
      requestData.append('protein', product.protein.toString())
      const response = await axios.post(this.url, requestData, config)
      return response.data
    }
    return super.apiRequest(postRecipe, 'post: recipe')
  }

  put = undefined
  patch = undefined
  del = undefined
}
