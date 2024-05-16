import { NavigationProp } from '@react-navigation/native'
import { Dispatch, SetStateAction } from 'react'
import { ResponseCode } from '../services/api/ResponseCode'

export type RootStackParamList = {
  Agenda: undefined
  Fridge: undefined
  Meals: undefined
  ShoppingList: undefined
  Settings: undefined
}

export type NavProps = {
  navigation: NavigationProp<any>
}

export type ApiResponse<T> = {
  data: T | null
  responseCode: ResponseCode
}

export type RenderChildProps<T> = {
  setRender: Dispatch<SetStateAction<T>>
}

export type RenderObject<T> = {
  renderName: T
  renderNode: React.ReactNode
}

export type AccountRenderName = 'Login' | 'Register'
export type SettingsPageRenderName = 'Settings' | 'Account'
export type SettingsRenderName = 'options' | 'mealsConfigOption' | 'constantShoppingListProductsOption'

export type FoodMacroElements = {
  proteins: number
  fats: number
  carbohydrates: number
}

export type Meal = {
  name: string
  macro?: FoodMacroElements
}

export type SizeProduct = {
  quantity: Number
  type: 'ml' | 'l' | 'g' | 'kg'
}

export type Product = {
  id: string
  name: string
  size: SizeProduct
}