import { LocalResponse } from '../../../types/Types'

export interface ILocalComponent<T, GET_PROPS> {
  key: string
  shouldBeInitialized: boolean
  init: () => Promise<void>
  get: (getProps: GET_PROPS) => Promise<LocalResponse<T>>
  set: (value: T) => Promise<void>
}
