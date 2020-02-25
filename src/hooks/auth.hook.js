import { useCallback, useEffect} from 'react'
import  store from "../store"
import { authUserSuccess, authTokenReady } from "../reducers/actions/auth-actions"

const storageName = 'userData'

export const useAuth = () => {

    const login = useCallback((jwtToken, userName) => {
        
        console.log("dispatching login", { jwtToken, userName })

        store.dispatch( authUserSuccess({ jwtToken, userName }) )

        localStorage.setItem(storageName, JSON.stringify({
            jwtToken, userName
        }))
    }, [])

    const logout = useCallback(() => {
        
        store.dispatch( authUserSuccess({ jwtToken: null, userName: null }) )

        localStorage.removeItem(storageName)
      }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
    
        if (data && data.jwtToken) {
          login(data.jwtToken, data.userName)
        }
        
        store.dispatch( authTokenReady() )

      }, [login])

    return { login, logout }
}