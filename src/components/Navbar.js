import React from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { useAuth } from '../hooks/auth.hook'
import { connect } from 'react-redux';

const Navbar = (state) => {
  const history = useHistory()
  const auth = useAuth()

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <nav>
      <div className="nav-wrapper blue darken-1">
        <span className="brand-logo">CRUD Котов, <b>{state.creds.userName}</b></span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/create">Создать</NavLink></li>
          <li><NavLink to="/cats">Список котов</NavLink></li>
          <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default connect(state => ( { creds: state.authState } ))(Navbar)