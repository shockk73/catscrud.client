import {createContext} from 'react'

export const AuthContext = createContext({
  jwtToken: null,
  userId: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false
})