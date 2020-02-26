import { useCallback } from 'react'
import { catRequestSended, catRequestSending } from '../reducers/actions/cats-crud-actions'
import store from '../store';

/**
 * Hook for working with requests 
 */
export const useHttp = (token) => {


    const request = useCallback(async (url, method, body, headers = {}) => {

        store.dispatch(catRequestSending())

        headers  = {
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "X-Requested-With": "XMLHttpRequest",
            "Access-Control-Allow-Methods" : "*",
            "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
            ...headers
        }

        try {
            if(token) {
                headers = {
                    ...headers,
                    Authorization: `Bearer ${token}`
                }
            }
            if(body) {
                body = JSON.stringify(body)
                headers['Content-type'] = 'application/json'
            }

            const response = await fetch(url, {method, body, headers})
            const data = (async () => { try { return await response.json() } catch(e) { return {} } })()

            if(!response.ok) {
                throw new Error(data.message 
                    || 'Something wrong')
            }

            store.dispatch(catRequestSended())

            return data
        } catch(e) {
            store.dispatch(catRequestSended())
            throw e
        }
    }, [token])

    return request
}