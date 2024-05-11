import { useState } from 'react'
import './App.css'
import FormPage from './components/formPage'
import Banner from './components/banner'
import Summary from './components/summary'
function App() {


  return (
    <>
      <Banner/>
      <FormPage/>
      <Summary/>
    </>
  )
}

export default App
