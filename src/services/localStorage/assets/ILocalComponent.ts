import { LocalResponse } from '../../../types/Types'

export interface ILocalComponent<T> {
  key: string
  shouldBeInitialized: boolean
  init: () => Promise<void>
  get: () => Promise<LocalResponse<T>>
  set: (value: T) => Promise<void>
}
