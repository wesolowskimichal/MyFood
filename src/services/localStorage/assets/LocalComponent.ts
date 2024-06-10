import AsyncStorage from '@react-native-async-storage/async-storage'
import { LocalResponse } from '../../../types/Types'
import { LocalResponseCode } from '../LocalResponseCode'
import { ILocalComponent } from './ILocalComponent'

export abstract class LocalComponent<T, GET_PROPS> implements ILocalComponent<T, GET_PROPS> {
  key: string
  abstract shouldBeInitialized: boolean

  constructor(key: string) {
    this.key = key
  }

  abstract init: () => Promise<void>
  abstract get: (getProps: GET_PROPS) => Promise<LocalResponse<T>>
  abstract set: (value: T) => Promise<void>

  protected async stringRequest(request: () => Promise<string>): Promise<LocalResponse<string>> {
    try {
      const data = await request()
      if (data) {
        return { data: data, responseCode: LocalResponseCode.POSITIVE }
      }
      return { data: null, responseCode: LocalResponseCode.NEGATIVE }
    } catch (error) {
      return { data: null, responseCode: LocalResponseCode.NEGATIVE }
    }
  }

  protected async parseRequest<T>(request: () => Promise<string | null>): Promise<LocalResponse<T>> {
    try {
      const data = await request()
      if (data) {
        const dataParsed: T = JSON.parse(data)
        return { data: dataParsed, responseCode: LocalResponseCode.POSITIVE }
      }
      return { data: null, responseCode: LocalResponseCode.NEGATIVE }
    } catch (error) {
      return { data: null, responseCode: LocalResponseCode.NEGATIVE }
    }
  }
}
