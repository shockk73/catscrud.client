import React, { useEffect, useCallback } from 'react'
import {useCatApi} from '../hooks/api/cat.api'
import {useHistory} from 'react-router-dom'
import {createCatParamSet} from '../reducers/actions/cat-forms-actions'
import { connect } from 'react-redux'
import store from '../store'

const CreatePage = (state) => {
  const history = useHistory()
  const catApi = useCatApi()

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = useCallback(event => {
    store.dispatch( createCatParamSet({ ...state.form, [event.target.name]: event.target.value }) )
  }, [state.form])

  const pressHandler = useCallback(async event => {
    if (event.key === 'Enter') {
        const data = await catApi.addCat({ jwtToken: state.creds.jwtToken, ...state.form })
        store.dispatch( createCatParamSet({ name: "", age: 0 }) )
        history.push(`/cats`)
    }
  }, [state.form, state.creds.jwtToken])

  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
        <div className="input-field">
          <input
            placeholder="Введите имя"
            id="cat-name"
            name="name"
            type="text"
            value={state.form.name}
            onChange={changeHandler}
            onKeyPress={pressHandler}
          />
          <label htmlFor="cat-name">Введите имя</label>
        </div>
        <div className="input-field">
          <input
            placeholder="Введите возраст"
            id="cat-age"
            name="age"
            type="text"
            value={state.form.age}
            onChange={changeHandler}
            onKeyPress={pressHandler}
          />
          <label htmlFor="cat-age">Введите возраст</label>
        </div>
      </div>
    </div>
  )
}

export default connect(state => ({ form: state.catFormState.c_cat, creds: state.authState }))(CreatePage)