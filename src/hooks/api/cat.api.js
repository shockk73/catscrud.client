import {useHttp} from "../http.hook";
import { useCallback } from 'react'




/**
 * Api for CRUD cat operations
 */
export const useCatApi = (jwtToken) => {
    
    var request = useHttp(jwtToken);

    const getCats = useCallback
    (
        async () => {

            var cats = await request(`/api/cats`, 'GET')
            return cats;
        }, []
    )    
        


    const getCat = useCallback(async (req) =>  {

        var cat = await request(`/api/cats/` + req.id, 'GET')
        
        return cat;
    }, [])



    const deleteCat = useCallback( async (req) => {
        
        await request(`/api/cats/` + req.id, 'DELETE')
    }, [])

    const addCat = useCallback( async (req) => {

        await request(`/api/cats`, 'POST', { name: req.name, age: req.age } )

    }, [])


    const updateCat = useCallback( async (req) => {
        await request(`/api/cats`, 'PUT', { ...req.cat })
    }, [])

    return { getCat, getCats, addCat, updateCat, deleteCat  }

}