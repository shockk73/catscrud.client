import { useHttp } from "../http.hook";
import { useCallback } from 'react'



export const useUserApi = () => {

    var request = useHttp();
    
    const getToken = useCallback
    (
        async (req) => {

            var token = await request(`/api/account/token`, 'POST', req, {})
            return token;
        }, []
    )    
        
    return { getToken  }

}