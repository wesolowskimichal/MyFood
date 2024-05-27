import AsyncStorage from '@react-native-async-storage/async-storage'
import { LocalResponse, Meal, Token } from '../../types/Types'
import { ILocalComponent } from './assets/ILocalComponent'
import { TokenComponent } from './assets/components/TokenComponent'
import { MealsConfigComponent } from './assets/components/MealsConfigComponent'

export class LocalData {
  private static _tokenComponent = new TokenComponent()
  private static _mealsConfigComponent = new MealsConfigComponent()
  private static _components: ILocalComponent<any>[] = [LocalData._tokenComponent, LocalData._mealsConfigComponent]

  public static async initDatabase() {
    const keys = await AsyncStorage.getAllKeys()
    for (const component of LocalData._components) {
      if (component.shouldBeInitialized && !keys.includes(component.key)) {
        console.log(`initializing ${component.key}`)

        component.init()
      }
    }
  }

  //#region Token
  public static async getToken(): Promise<LocalResponse<Token>> {
    return LocalData._tokenComponent.get()
  }

  public static async setToken(token: Token | null) {
    await LocalData._tokenComponent.set(token)
  }
  //#endregion

  //#region MealsConfig
  public static async getMealsConfig(): Promise<LocalResponse<Meal[]>> {
    return LocalData._mealsConfigComponent.get()
  }

  public static async setMealsConfig(mealsConfig: Meal[]) {
    await LocalData._mealsConfigComponent.set(mealsConfig)
  }
  //#endregion
}
