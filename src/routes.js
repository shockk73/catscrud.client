import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import CatsPage from './modules/CatsPage'
import CreatePage from './modules/CreatePage'
import CatPage from './modules/CatPage'
import AuthPage from './modules/AuthPage'


/**
 * Component for map path and componentns of application
 */
export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/cats" exact>
          <CatsPage />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/cat/:id">
          <CatPage />
        </Route>
        <Redirect to="/create" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}