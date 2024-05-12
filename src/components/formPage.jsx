
import React from 'react'
import Summary from './summary'
import Food from './foodsection'
import RadioSelector from './radioform'
import DropdownMenu from './dropbox'
import ToppingMenu from './checkboxes'
import Texts from './textInput'
function FormPage (){
    return(
        <>
        <section className='Food-section'>
        <Food/>
        </section>
        <section className='form-section'>
            <RadioSelector/>
            <DropdownMenu/>
            <ToppingMenu/>
            <Texts/>
        </section>
        <section className='summary'>
        <Summary/>
        </section>
        </>
    )
}

export default FormPage