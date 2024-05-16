import axios, { AxiosError } from 'axios'
import { User } from '../../interfaces/Intefaces'
import { ResponseCode } from './ResponseCode'
import { ApiResponse } from '../../types/Types'

export class ApiService {
  private static async apiRequest<T>(request: () => Promise<T>): Promise<ApiResponse<T>> {
    try {
      const data = await request()
      return { data: data, responseCode: ResponseCode.POSITIVE }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const statusCode = (error as AxiosError).response?.status
        return { data: null, responseCode: ApiService.convertCodeToResponseCode(statusCode) }
      }
      return { data: null, responseCode: ResponseCode.BAD_RESPONSE }
    }
  }

  public static async login(username: string, password: string): Promise<ApiResponse<User>> {
    const fetchUser = async (): Promise<User> => {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username: username,
        password: password
      })
      return response.data
    }
    return ApiService.apiRequest(fetchUser)
  }

  private static convertCodeToResponseCode(responseCode: Number | undefined): ResponseCode {
    switch (responseCode) {
      case 400:
        return ResponseCode.BAD_RESPONSE
      case 401:
        return ResponseCode.UNAUTHORIZED
      case 403:
        return ResponseCode.FORBIDDEN
      case 404:
        return ResponseCode.NOT_FOUND
      case 408:
        return ResponseCode.TIMEOUT
      case 500:
        return ResponseCode.INTERNAL_SERVER
      case 502:
        return ResponseCode.BAD_GATEWAY
      case 504:
        return ResponseCode.GATEWAY_TIMEOUT
      default:
        return ResponseCode.BAD_RESPONSE
    }
  }
}
