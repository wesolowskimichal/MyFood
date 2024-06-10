import AsyncStorage from '@react-native-async-storage/async-storage'
import { AgendaDay, AgendaMeal, LocalResponse, Meal } from '../../../../types/Types'
import { LocalComponent } from '../LocalComponent'

type __PROPS = Meal

export class AgendaDaysComponent extends LocalComponent<(AgendaDay | null)[], __PROPS> {
  private getDefaultMeals: () => Promise<LocalResponse<Meal[]>>
  constructor(getDefaultMeals: () => Promise<LocalResponse<Meal[]>>) {
    super('agendaDays')
    this.getDefaultMeals = getDefaultMeals
  }

  shouldBeInitialized: boolean = true

  private async getInitAgendaDay() {
    const defaultMeals = await this.getDefaultMeals()

    const agendaMeals: AgendaMeal[] = defaultMeals.data!.map((meal: Meal) => {
      return {
        meal: meal,
        macro: {
          proteins: 0,
          carbohydrates: 0,
          fats: 0
        }
      }
    })

    const initAgendaDay: AgendaDay = {
      day: 0,
      date: new Date(),
      agendaMeals: agendaMeals
    }

    return initAgendaDay
  }

  init: () => Promise<void> = async () => {
    const initAgendaDay = await this.getInitAgendaDay()
    await this.set([initAgendaDay, null, null, null, null, null, null])
  }

  public async update(agendaDaysResponse: LocalResponse<(AgendaDay | null)[]>) {
    const today = new Date()
    if (agendaDaysResponse.data) {
      const agendaDays = agendaDaysResponse.data
      for (let agendaDayIndex = 6; agendaDayIndex >= 0; --agendaDayIndex) {
        if (agendaDays[agendaDayIndex]) {
          const agendaDayDate = new Date(agendaDays[agendaDayIndex]!.date)
          const timeDiff = today.getTime() - agendaDayDate.getTime()
          const dateDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))

          if (dateDiff >= 0 && dateDiff < 7) {
            agendaDays[dateDiff] = agendaDays[agendaDayIndex]
            agendaDays[dateDiff]!.day = agendaDayIndex as 0 | 1 | 2 | 3 | 4 | 5 | 6
          } else {
            agendaDays[agendaDayIndex] = null
          }
        }
      }
      if (!agendaDays[0]) {
        const initAgendaDay = await this.getInitAgendaDay()
        agendaDays[0] = initAgendaDay
      }
      this.set(agendaDays)
    }
  }

  public get: () => Promise<LocalResponse<(AgendaDay | null)[]>> = async () => {
    const fetchAgendaDays = async () => {
      const agendaDays = await AsyncStorage.getItem(this.key)
      return agendaDays
    }

    return super.parseRequest<(AgendaDay | null)[]>(fetchAgendaDays)
  }

  public set: (value: (AgendaDay | null)[]) => Promise<void> = async value => {
    const agendaDaysJson = JSON.stringify(value)

    await AsyncStorage.setItem(this.key, agendaDaysJson)
  }
}
