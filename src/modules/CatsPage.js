import React, {useCallback,  useEffect } from 'react'
import {Loader} from '../components/Loader'
import CatList from '../components/CatList'
import { connect } from 'react-redux'
import { useCatApi } from '../hooks/api/cat.api'
import store from '../store'
import { getCatsSuccess, deleteCatSuccess } from '../reducers/actions/cats-crud-actions'

const CatsPage = (state) => {


  const catApi = useCatApi(state.creds.jwtToken)

  const getCats = useCallback(async () => {
    var cats = await catApi.getCats()
    store.dispatch( getCatsSuccess(cats) )
  },[])

  const deleteHandler = useCallback(async (id) => {
    await catApi.deleteCat( { id } )
    store.dispatch( deleteCatSuccess(id) )
  }, [])

  useEffect(() => {
    getCats()
  }, [])

  if (state.data.isLoading) {
    return <Loader/>
  }

  return (
    <>
      {!state.data.isLoading && <CatList deleteHandler={deleteHandler} />}
    </>
  )
}

/**
 * Container  component for display all cats and remove any of it
 */
export default connect( state => ( { data: state.catState, creds: state.authState } ) )(CatsPage)