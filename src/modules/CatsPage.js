import React, {useCallback,  useEffect } from 'react'
import {Loader} from '../components/Loader'
import CatList from '../components/CatList'
import { connect } from 'react-redux'
import store from '../store'
import * as types from "../reducers/actions/action-types"

const CatsPage = (state) => {

  const deleteHandler = useCallback(async (id) => {
    store.dispatch( types.catDeleteActions.request(id) )
  }, [])

  useEffect(() => {
    store.dispatch( types.catGetsActions.request() )
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