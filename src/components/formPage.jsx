
import React, { useEffect, useState } from 'react'
import Summary from './summary'
import Food from './foodsection'
import RadioSelector from './radioform'
import DropdownMenu from './dropbox'
import ToppingMenu from './checkboxes'
import Texts from './textInput'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Banner from './banner'
const initialForm ={
    Pname:"Position Absulute Acı Pizza",
    price:"85.50",
    size:"",
    type:"",
    topping:[],
    name:"",
    not:""
}
const initialErrors = {
    name: false,
    topping: false,
  };

function FormPage (){
    const [form,setForm] = useState(initialForm);
    const [errors, setErrors] = useState(initialErrors);
    const [isValid, setIsValid] = useState(false);
    const history = useHistory();

    const handleChange = (event) =>{
        let { name, value, type } = event.target; 
        setForm({ ...form, [name]: value });
        if(type==="checkbox"){
            let newValue;
            const oldVal=form.topping;
            if(oldVal.includes(event.target.value)){
                newValue = oldVal.filter((v)=> v !== event.target.value);
              }else{
                newValue = [...oldVal,event.target.value];
              }
              setForm({ ...form, topping: newValue });
           }

           if (
            (name == `name` && form.name.trim().length >= 4) ||
            (name == 'topping' && form.topping.length >= 4)
          ) {
            setErrors({ ...errors, [name]: false });
          }else if(name == "size"|| name== "type" || name== "not"){
            setErrors({...errors})
          } else {
            setErrors({ ...errors, [name]: true });
          }
            console.log(form);
            console.log(errors)
            };
            useEffect(() => {
                if (
                    (form.name.trim().length >= 4) &&
                    (form.topping.length >= 4)) {
                  setIsValid(true);
                } else {
                  setIsValid(false);
                }
              }, [errors]);

              const handleSubmit = (event) => {
                event.preventDefault();
                if (!isValid) {
                  return;
                }
                axios
                  .post('https://reqres.in/api/pizza',form)
                  .then((res) => {
                    console.log(res.data)
                  });

              };

    return(
        <>
        <Banner/>
        <Food/>
        <RadioSelector onChange={handleChange}/>
        <DropdownMenu onChange={handleChange}/>
        <ToppingMenu onChange={handleChange}/>
        <Texts onChange={handleChange}/>
        <Summary form={form} valid={isValid} submit={handleSubmit}/>
        </>
    )
}

export default FormPage