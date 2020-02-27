import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import { connect } from 'react-redux';
import { getJwtTokenData, useAuth } from './hooks/auth.hook'
import Navbar from './components/Navbar'
import {Loader} from './components/Loader'
import 'materialize-css'

function App(state) {

  useAuth()

  const isAuthenticated = !!getJwtTokenData().jwtToken
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

/**
 * Application component
 */
export default connect( state => ( { creds: state.authState } ) )(App)