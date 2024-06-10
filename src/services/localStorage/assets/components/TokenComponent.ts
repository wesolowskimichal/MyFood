import AsyncStorage from '@react-native-async-storage/async-storage'
import { LocalResponse, Token } from '../../../../types/Types'
import { LocalComponent } from '../LocalComponent'
import { __NO_PROPS } from '../../../api/assets/IApiComponent'

type __GET_PROPS = __NO_PROPS

export class TokenComponent extends LocalComponent<Token, __GET_PROPS> {
  constructor() {
    super('token')
  }

  shouldBeInitialized: boolean = false

  init: () => Promise<void> = async () => {}

  public get: () => Promise<LocalResponse<Token>> = async () => {
    const fetchToken = async () => {
      const tokenJson = await AsyncStorage.getItem(this.key)
      return tokenJson
    }

    return super.parseRequest(fetchToken)
  }

  public set: (value: Token | null) => Promise<void> = async value => {
    if (!value) {
      await AsyncStorage.removeItem(this.key)
    } else {
      const tokenJson = JSON.stringify(value)
      await AsyncStorage.setItem(this.key, tokenJson)
    }
  }
}
