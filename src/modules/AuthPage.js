import React, { useEffect, useCallback } from 'react'
import store from '../store'
import { connect } from 'react-redux';
import * as types from '../reducers/actions/action-types'

const AuthPage = (state) => {

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = useCallback(event => {
    store.dispatch( types.updateAuthFormAction({ ...state.form, [event.target.name]: event.target.value }) )
  }, [state.form])


  const loginHandler = useCallback(async () => {
    try {
      store.dispatch( types.tokenGetActions.request(state.form) )
    } catch (e) { alert(e.message) }
  }, [state.form])

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>CRUD Котов</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>
            <div>

              <div className="input-field">
                <input
                  placeholder="Введите login"
                  id="username"
                  type="text"
                  name="username"
                  className="yellow-input"
                  value={state.form.username}
                  onChange={changeHandler}
                />
                <label htmlFor="username">Логин</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Введите пароль"
                  id="password"
                  type="password"
                  name="password"
                  className="yellow-input"
                  value={state.form.password}
                  onChange={changeHandler}
                />
                <label htmlFor="email">Пароль</label>
              </div>

            </div>
          </div>
          <div className="card-action">
            <button
              className="btn yellow darken-4"
              style={{marginRight: 10}}
              disabled={state.creds.isLoading}
              onClick={loginHandler}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Container  and presentional component for authorise user
 */
export default connect((state) => ( { form: state.authFormState, creds: state.authState  } ))(AuthPage);