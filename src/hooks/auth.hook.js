import { useEffect} from 'react'
import  store from "../store"
import { tokenGetActions, tokenReadyAction } from "../reducers/actions/action-types"

const storageName = 'userData'

export const setToLocalSorage =(jwtToken, userName) => {
    localStorage.setItem(storageName, JSON.stringify({
        jwtToken, userName
    }))
}

export const getJwtTokenData = () => {
    const data = JSON.parse(localStorage.getItem(storageName))

    return data ? { jwtToken: data.jwtToken || null, userName: data.userName || null } : { jwtToken: null, userName: null }
}

export const removeFromLocalSorage = () => {
    localStorage.removeItem(storageName)
}

/**
 * Hook for working with auth user creds in localsotage
 */
export const useAuth = () => {

    useEffect(() => {
        const data = getJwtTokenData()
    
        if (data.jwtToken) {
          store.dispatch( tokenGetActions.success({ jwtToken: data.jwtToken, userName: data.userName }) )
        }
        
        store.dispatch( tokenReadyAction() )

      }, [getJwtTokenData])

    return { setToLocalSorage, removeFromLocalSorage, getJwtTokenData }
}