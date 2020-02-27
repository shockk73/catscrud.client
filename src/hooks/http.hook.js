
/**
 * Hook for working with requests 
 */
export const useHttp = (token) => {


    const request =  async (url, method, body, headers = {}) => {

        console.log( url, body )

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

            return data
        } catch(e) {
            throw e
        }
    }

    return request
}