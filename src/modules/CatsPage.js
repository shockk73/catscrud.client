import React, {useCallback,  useEffect } from 'react'
import {Loader} from '../components/Loader'
import CatList from '../components/CatList'
import { connect } from 'react-redux'
import { useCatApi } from '../hooks/api/cat.api'
import store from '../store'
import { getCatsSuccess, deleteCatSuccess } from '../reducers/actions/cats-crud-actions'

const CatsPage = (state) => {


  const catApi = useCatApi()

  const getCats = useCallback(async () => {
    var cats = await catApi.getCats(  { jwtToken: state.creds.jwtToken }  )
    store.dispatch( getCatsSuccess(cats) )
  },[state.creds.jwtToken])

  const deleteHandler = useCallback(async (id) => {
    await catApi.deleteCat( { jwtToken: state.creds.jwtToken, id } )
    store.dispatch( deleteCatSuccess(id) )
  }, [state.creds.jwtToken])

  useEffect(() => {
    getCats()
  }, [state.creds.jwtToken])

  if (state.data.isLoading) {
    return <Loader/>
  }

  return (
    <>
      {!state.data.isLoading && <CatList deleteHandler={deleteHandler} />}
    </>
  )
}

export default connect( state => ( { data: state.catState, creds: state.authState } ) )(CatsPage)