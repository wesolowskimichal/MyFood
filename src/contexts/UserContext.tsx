import React, { createContext, useContext, useState } from 'react'
import { User } from '../interfaces/Intefaces'

interface userContextType {
  user: User | null
  setUser: (user: User | null) => void
}

const UserContext = createContext<userContextType>({
  user: null,
  setUser: () => {}
})

type UserProviderProps = {
  children: React.ReactNode
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
