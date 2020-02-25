import {useHttp} from "../http.hook";
import { useCallback } from 'react'





export const useCatApi = () => {
    
    var request = useHttp();

    const getCats = useCallback
    (
        async (req) => {

            var cats = await request(`/api/cats`, 'GET', null, {
                Authorization: `Bearer ${req.jwtToken}`
            })
            return cats;
        }, []
    )    
        


    const getCat = useCallback(async (req) =>  {

        var cat = await request(`/api/cats/` + req.id, 'GET', null, {
            Authorization: `Bearer ${req.jwtToken}`
        })
        
        return cat;
    }, [])



    const deleteCat = useCallback( async (req) => {
        
        await request(`/api/cats/` + req.id, 'DELETE', null, {
            Authorization: `Bearer ${req.jwtToken}`
        })
    }, [])

    const addCat = useCallback( async (req) => {

        await request(`/api/cats`, 'POST', { name: req.name, age: req.age }, {
            Authorization: `Bearer ${req.jwtToken}`
        })

    }, [])


    const updateCat = useCallback( async (req) => {
        await request(`/api/cats`, 'PUT', { ...req.cat }, {
            Authorization: `Bearer ${req.jwtToken}`
        })
    }, [])

    return { getCat, getCats, addCat, updateCat, deleteCat  }

}