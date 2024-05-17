import AsyncStorage from '@react-native-async-storage/async-storage'
import { LocalResponse, Meal, Token } from '../../../../types/Types'
import { LocalComponent } from '../LocalComponent'

export class MealsConfigComponent extends LocalComponent<Meal[]> {
  constructor() {
    super('mealsConfig')
  }

  shouldBeInitialized: boolean = true

  init: () => Promise<void> = async () => {
    const defaultMeals: Meal[] = [{ name: 'Breakfast' }, { name: 'Lunch' }, { name: 'Dinner' }]
    await this.set(defaultMeals)
  }

  public get: () => Promise<LocalResponse<Meal[]>> = async () => {
    const fetchMealsConfig = async () => {
      const mealsConfig = await AsyncStorage.getItem(this.key)
      return mealsConfig
    }

    return super.parseRequest(fetchMealsConfig)
  }

  public set: (value: Meal[]) => Promise<void> = async value => {
    const mealsJson = JSON.stringify(value)
    await AsyncStorage.setItem(this.key, mealsJson)
  }
}
