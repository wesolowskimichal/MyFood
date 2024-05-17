import React, { createContext, useContext, useEffect, useState } from 'react'
import { Token, User } from '../types/Types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ApiService } from '../services/api/ApiService'
import { ResponseCode } from '../services/api/ResponseCode'
import { LocalData } from '../services/localStorage/LocalData'
import { LocalResponseCode } from '../services/localStorage/LocalResponseCode'

interface userContextType {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  token: Token | null
  setToken: (token: Token | null) => void
}

const UserContext = createContext<userContextType>({
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {}
})

type UserProviderProps = {
  children: React.ReactNode
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<Token | null>(null)

  useEffect(() => {
    if (token) {
      const fetchUser = async () => {
        const response = await ApiService.getUser()
        if (response.responseCode === ResponseCode.POSITIVE) {
          setUser(response.data)
        }
      }
      fetchUser()
    }
  }, [token])

  useEffect(() => {
    const loadToken = async () => {
      const tokenResponse = await LocalData.getToken()
      if (tokenResponse.responseCode === LocalResponseCode.POSITIVE) {
        setToken(tokenResponse.data)
      }
    }
    loadToken()
  }, [])

  const handleSetToken = (token: Token | null) => {
    const setLocal = async () => {
      await LocalData.setToken(token)
    }

    setToken(token)
    setLocal()
  }
  return (
    <UserContext.Provider value={{ user, setUser, token, setToken: handleSetToken }}>{children}</UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
