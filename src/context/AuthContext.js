import {createContext} from 'react'

/**
 * Old storage implementaion for user auth creds
 */
export const AuthContext = createContext({
  jwtToken: null,
  userId: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false
})