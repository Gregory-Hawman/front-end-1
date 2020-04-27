import React from 'react'
import './App.css'
import Navigation from '../src/components/Nav'
import { Route, Switch, Link } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Navigation />

      <Switch>
        <Route path='/login'>
          <div>
            SIGNIN
          </div>
        </Route>

        <Route path='/signup'>
          <div>
            SIGNUP
          </div>
        </Route>

        <Route path='/'>
          <div>HOME</div>
        </Route>
          
      </Switch>
    </div>

    
  );

}

export default App
