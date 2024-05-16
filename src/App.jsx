
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import FormPage from './components/formPage'
import LandingPage from './components/landingPage';
import Success from './components/successPage';

function App() {


  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact default>
          <LandingPage/>
        </Route>
        <Route path="/form">
        <FormPage/>
        </Route>
        <Route path="/succes">
        <Success/>
        </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App

{/*
*/}