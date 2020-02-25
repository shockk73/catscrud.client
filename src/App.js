import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import store from './store'
import { connect } from 'react-redux';
import { useAuth } from './hooks/auth.hook'
import Navbar from './components/Navbar'
import {Loader} from './components/Loader'
import 'materialize-css'

function App(state) {
  const auth = useAuth()
  const isAuthenticated = !!state.creds.jwtToken
  const routes = useRoutes(isAuthenticated)


  if (!state.creds.isReady) {
    return <Loader />
  }

  return (
      <Router>
        { isAuthenticated && <Navbar /> }
        <div className="container">
          {routes}
        </div>
      </Router>
  )
}

export default connect( state => ( { creds: state.authState } ) )(App)