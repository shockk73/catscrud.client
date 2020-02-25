import React, {useCallback, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useCatApi} from '../hooks/api/cat.api'
import {Loader} from '../components/Loader'
import CatCard from '../components/CatCard'
import { connect } from 'react-redux'
import store from '../store'
import { getCatSuccess, updateCatSuccess } from '../reducers/actions/cats-crud-actions'
import { updateCatParamSet } from '../reducers/actions/cat-forms-actions'

const CatPage = (state) => {

  const catId = useParams().id

  const catApi = useCatApi()

  const changeHandler = useCallback(event => {
    store.dispatch( updateCatParamSet({ ...state.form, [event.target.name]: event.target.value }) )
  }, [state.form])

  const updateHandler = useCallback(async event => {
    await catApi.updateCat( { jwtToken: state.creds.jwtToken, cat: { ...state.data.cat, ...state.form } } )

    store.dispatch( updateCatSuccess({ ...state.data.cat, ...state.form }) )
   }, [state.data.cat, state.form, state.creds.jwtToken])

  const getCat = useCallback(async (t, i) => {
    var cat = await catApi.getCat( { jwtToken: t, id: i  } )
    store.dispatch( getCatSuccess(cat) )
    store.dispatch(  updateCatParamSet( { name: cat.name, age: cat.age } ) )
  }, [])

  useEffect(() => {
     getCat(state.creds.jwtToken, catId)
  }, [state.creds.jwtToken, catId])

  if (state.data.isLoading) {
    return <Loader />
  }

  return (
    <>
      { !state.data.isLoading && state.data.cat && <CatCard changeHandler={changeHandler} updateHandler={updateHandler} /> }
    </>
  )
}

export default connect( state => ({ form: state.catFormState.u_cat, data: state.catState, creds: state.authState }) )( CatPage )