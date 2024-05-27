import { NavigationProp } from '@react-navigation/native'
import { Dispatch, SetStateAction } from 'react'
import { ResponseCode } from '../services/api/ResponseCode'
import { LocalResponseCode } from '../services/localStorage/LocalResponseCode'

export type GenericTypes = {
  id: string
  picture: string
  url: string
}

export type Token = {
  access: string
  refresh: string
}

export type User = {
  id: GenericTypes['id']
  username: string
  email: string
  first_name: string
  last_name: string
  picture: GenericTypes['picture']
}

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

export type LocalResponse<T> = {
  data: T | null
  responseCode: LocalResponseCode
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

export type Recipe = {
  id: GenericTypes['id']
  name: string
  description: string
  shared: boolean
  added_by: User
  products: Product[]
  preparation: string
  time: number
  difficulty: 'easy' | 'medium' | 'hard'
  servings: number
  picture: GenericTypes['picture']
  is_liked: boolean
  likes: number
}

export type AgendaDay = {
  day: 0 | 1 | 2 | 3 | 4 | 5 | 6
  agendaMeal: AgendaMeal[]
}

export type AgendaMeal = {
  meal: Meal
  products?: Product[]
  recipes?: Recipe[]
}

export type SizeProduct = {
  quantity: Number
  type: 'ml' | 'l' | 'g' | 'kg'
}

export type Product = {
  id: GenericTypes['id']
  barcode: string
  name: string
  amount: number
  unit: 'ml' | 'l' | 'g' | 'kg'
  picture: GenericTypes['picture']
  added_by: User['id']
  carbons: number
  fat: number
  protein: number
}

export type ChangePasswordType = {
  old_password: string
  new_password: string
}

export type RecipePage = {
  count: number
  next: GenericTypes['url']
  previous: GenericTypes['url']
  results: Recipe[]
}
