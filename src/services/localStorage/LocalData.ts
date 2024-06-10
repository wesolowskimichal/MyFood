import AsyncStorage from '@react-native-async-storage/async-storage'
import { AgendaDay, LocalResponse, Meal, Token } from '../../types/Types'
import { ILocalComponent } from './assets/ILocalComponent'
import { TokenComponent } from './assets/components/TokenComponent'
import { MealsConfigComponent } from './assets/components/MealsConfigComponent'
import { AgendaDaysComponent } from './assets/components/AgendaDaysComponent'

export class LocalData {
  private static _tokenComponent = new TokenComponent()
  private static _mealsConfigComponent = new MealsConfigComponent()
  private static _agendaDaysComponent = new AgendaDaysComponent(this.getMealsConfig)
  private static _components: ILocalComponent<any, any>[] = [
    LocalData._tokenComponent,
    LocalData._mealsConfigComponent,
    LocalData._agendaDaysComponent
  ]

  public static async initDatabase() {
    const keys = await AsyncStorage.getAllKeys()
    for (const component of LocalData._components) {
      if (component.shouldBeInitialized && !keys.includes(component.key)) {
        console.log(`initializing ${component.key}`)
        component.init()
      }
    }
    const agendaDays = await this._agendaDaysComponent.get()
    this._agendaDaysComponent.update(agendaDays)
    // await AsyncStorage.removeItem(this._agendaDaysComponent.key)
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

  //#region Agenda
  public static async getAgendaDays() {
    return LocalData._agendaDaysComponent.get()
  }

  public static async setAgendaDays(value: (AgendaDay | null)[]) {
    return LocalData._agendaDaysComponent.set(value)
  }

  //#endregion
}
