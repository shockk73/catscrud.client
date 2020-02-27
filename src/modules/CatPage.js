import React, {useCallback, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Loader} from '../components/Loader'
import CatCard from '../components/CatCard'
import { connect } from 'react-redux'
import store from '../store'
import * as types from "../reducers/actions/action-types"

const CatPage = (state) => {

  const catId = useParams().id

  const changeHandler = useCallback(event => {
    store.dispatch( types.updateCatUpdatingFormAction({ ...state.form, [event.target.name]: event.target.value }) )
  }, [state.form])

  const updateHandler = useCallback(async event => {
    store.dispatch( types.catUpdateActions.request({ ...state.data.cat, ...state.form }) )
   }, [state.data.cat, state.form])

  useEffect(() => {
    store.dispatch( types.catGetActions.request(catId) )
  }, [catId])

  if (state.data.isLoading) {
    return <Loader />
  }

  return (
    <>
      { !state.data.isLoading && state.data.cat && <CatCard changeHandler={changeHandler} updateHandler={updateHandler} /> }
    </>
  )
}

/**
 * Container  component for display cat all information and update it
 */
export default connect( state => ({ form: state.catFormState.u_cat, data: state.catState, creds: state.authState }) )( CatPage )