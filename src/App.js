import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/pages/home/Home'
import Login from './components/pages/login/Login'
import Signup from './components/pages/signup/Signup'
import { useAuthContext } from './hooks/useAuthContext'

const App = () => {

  const { authIsReady, user } = useAuthContext()
  return (
    <div>
      {authIsReady &&
        <Router>
          <Navbar />
          <Switch>

            <Route exact path="/">
              {user ? <Home /> : <Redirect to='/login' />}
            </Route>

            <Route exact path="/signup">
              {!user ? <Signup /> : <Redirect to="/" />}
            </Route>

            <Route exact path="/login">
              {!user ? <Login /> : <Redirect to="/" />}
            </Route>

          </Switch>

        </Router>
      }
    </div>
  )
}

export default App
