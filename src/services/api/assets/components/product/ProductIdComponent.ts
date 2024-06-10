import axios from 'axios'
import { ApiResponse, GenericTypes, Product, Recipe } from '../../../../../types/Types'
import { __NO_PROPS } from '../../IApiComponent'
import { IdComponent } from '../../IdComponent'

type __POST_PROPS = __NO_PROPS

type __PUT_PROPS = {
  barcode: Product['barcode']
  name: Product['name']
  amount: Product['amount']
  unit: Product['unit']
  picture: Product['picture']
  carbons: Product['carbons']
  fat: Product['fat']
  protein: Product['protein']
}

type __PATCH_PROPS = {
  barcode?: Product['barcode']
  name?: Product['name']
  amount?: Product['amount']
  unit?: Product['unit']
  picture?: Product['picture']
  carbons?: Product['carbons']
  fat?: Product['fat']
  protein?: Product['protein']
}

type __DEL_PROPS = __NO_PROPS

export class ProductIdComponent extends IdComponent<Product, __POST_PROPS, __PUT_PROPS, __PATCH_PROPS, __DEL_PROPS> {
  constructor(parentUrl: string, id: GenericTypes['id']) {
    super(parentUrl, id)
  }

  get = async (): Promise<ApiResponse<Product>> => {
    const fetchById = async () => {
      const response = await axios.get(this.url)
      return response.data
    }

    return super.apiRequest(fetchById, 'get: by id')
  }

  put = async (product: __PUT_PROPS): Promise<ApiResponse<Product>> => {
    const putProduct = async () => {
      const config = await super.getConfig(true)
      const requestData = new FormData()
      requestData.append('barcode', product.barcode)
      requestData.append('name', product.name)
      requestData.append('amount', product.amount.toString())
      requestData.append('unit', product.unit)
      requestData.append('picture', product.picture)
      requestData.append('carobns', product.carbons.toString())
      requestData.append('fat', product.fat.toString())
      requestData.append('protein', product.protein.toString())
      const response = await axios.put(this.url, requestData, config)
      return response.data
    }

    return super.apiRequest(putProduct, 'put: product')
  }

  patch = async (product: __PATCH_PROPS): Promise<ApiResponse<Product>> => {
    const patchProduct = async () => {
      const config = await super.getConfig(true)
      const requestData = new FormData()
      if (product.barcode) requestData.append('barcode', product.barcode)
      if (product.name) requestData.append('name', product.name)
      if (product.amount) requestData.append('amount', product.amount.toString())
      if (product.unit) requestData.append('unit', product.unit)
      if (product.picture) requestData.append('picture', product.picture)
      if (product.carbons) requestData.append('carobns', product.carbons.toString())
      if (product.fat) requestData.append('fat', product.fat.toString())
      if (product.protein) requestData.append('protein', product.protein.toString())
      const response = await axios.put(this.url, requestData, config)
      return response.data
    }

    return super.apiRequest(patchProduct, 'patch: product')
  }

  del = async (): Promise<ApiResponse<null>> => {
    const delProduct = async () => {
      const config = await super.getConfig()
      const response = await axios.delete(this.url, config)
      return response.data
    }

    return super.apiRequest(delProduct, 'del: product')
  }
  post = undefined
}
