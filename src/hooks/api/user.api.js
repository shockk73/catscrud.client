import { useHttp } from "../http.hook";


/**
 * Api for creating auth token
 */
export const useUserApi = () => {

    var request = useHttp();
    
    const getToken = 
        async (req) => {
            var token = await request(`/api/account/token`, 'POST', req, {})
            return token;
        }
     
        
    return { getToken  }

}