import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { ResponseCode } from './ResponseCode'
import { ApiResponse, Token, User } from '../../types/Types'
import AsyncStorage from '@react-native-async-storage/async-storage'

export class ApiService {
  private static __debug = true

  private static async apiRequest<T>(request: () => Promise<T>, title: string | null = null): Promise<ApiResponse<T>> {
    //debug
    let debugLog = ''
    debugLog = `Request: ${title ?? '-?-'}`

    try {
      const data = await request()
      //debug
      debugLog += `\t\t=>code: 200\ndata: ${JSON.stringify(data)}`
      console.log(debugLog)
      return { data: data, responseCode: ResponseCode.POSITIVE }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const statusCode = (error as AxiosError).response?.status
        //debug
        debugLog += `\t\t=>code: ${ApiService.convertCodeToResponseCode(statusCode)}`
        console.log(debugLog)
        return { data: null, responseCode: ApiService.convertCodeToResponseCode(statusCode) }
      } else {
        //debug
        debugLog += `\t\t=>code: ${ResponseCode.BAD_RESPONSE}`
      }
      //debug
      console.log(debugLog)

      return { data: null, responseCode: ResponseCode.BAD_RESPONSE }
    }
  }

  public static async getToken(username: string, password: string): Promise<ApiResponse<Token>> {
    const postToken = async (): Promise<Token> => {
      const response = await axios.post('http://192.168.0.22:3000/api/token/', {
        username: username,
        password: password
      })

      return response.data
    }
    return ApiService.apiRequest(postToken, 'get: token')
  }

  public static async getUser(): Promise<ApiResponse<User>> {
    const fetchUser = async () => {
      const config = await ApiService.getConfig()

      const response = await axios.get('http://192.168.0.22:3000/api/user', config)

      return response.data
    }

    return ApiService.apiRequest(fetchUser, 'get: user')
  }

  private static async getConfig(mutliplatformFormData = false): Promise<AxiosRequestConfig<any> | undefined> {
    const tokenJson = await AsyncStorage.getItem('token')
    if (tokenJson) {
      const token: Token = JSON.parse(tokenJson)
      const accessToken = token.access
      if (mutliplatformFormData) {
        return {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      }
      return {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    }
    return undefined
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
