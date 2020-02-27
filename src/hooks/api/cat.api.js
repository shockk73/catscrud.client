import {useHttp} from "../http.hook";
import { useCallback } from 'react'




/**
 * Api for CRUD cat operations
 */
export const useCatApi = (jwtToken) => {
    
    var request = useHttp(jwtToken);

    const getCats = 
        async () => {

            var cats = await request(`/api/cats`, 'GET')
            return cats;
        }  
        


    const getCat = async (req) =>  {

        var cat = await request(`/api/cats/` + req.id, 'GET')
        
        return cat;
    }



    const deleteCat = async (req) => {
        
        await request(`/api/cats/` + req.id, 'DELETE')
    }

    const addCat = async (req) => {

        await request(`/api/cats`, 'POST', { name: req.name, age: parseInt(req.age) } )

    }


    const updateCat = async (req) => {
        await request(`/api/cats`, 'PUT', { id: req.cat.id, name: req.cat.name, age: parseInt(req.cat.age) })
    }

    return { getCat, getCats, addCat, updateCat, deleteCat  }

}