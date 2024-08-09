import React, { useState } from 'react'
import { useForm } from "react-hook-form"

const initialForm ={
    Pname:"Position Absulute Acı Pizza",
    price:85.5,
    size:"",
    type:"",
    topping:[],
    name:"",
    not:"",
    adet:1,
}
const Toppings =["Pepperonni","Biber","Domates","Sosis","Mısır","Sucuk","Kanada Jambonu","Ananas" ,"Tavuk Izgara" , "Jalapeno", "Kabak", "Soğan","Sarımsak"]

function PizzaPage (){
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: initialForm, mode: 'onChange' });
    

    const [counter,setCounter] =useState(1);
    let ekMalzeme = ((formState.topping.length)*5);
    let total =(formState.price*counter)+ekMalzeme;
    
     

    const arttır = () => {
      setCounter(counter + 1);
  };

    const azalt = () => {
       if(counter===0){
          return
        }else{
         setCounter(counter - 1);
      }
      };
         
    const onSubmit = async (data) => {
    console.log('--- onsubmit data: ', data);
      };

    return(
        <>
        <Banner/>
        <Food/>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='selections'>
        <div className='radio'>
            <h3>Boyut seç</h3>
            <div className="pizzaSize">
            <input 
            type="radio" 
            name="size" 
            value="Küçük" 
            id="regular" 
            {...register('size', {
                required: 'select size',
              })} />
            <label htmlFor="regular">Küçük</label>
            </div>
            <div className="pizzaSize">
            <input 
            type="radio" 
            name="size" 
            value="Orta" 
            id="medium"
            {...register('size', {
                required: 'select size',
              })}  />
            <label htmlFor="medium">Orta</label>
            </div>
            <div className="pizzaSize">
            <input 
            type="radio" 
            name="size" 
            value="Büyük" 
            id="large" 
            {...register('size', {
                required: 'select size',
              })} />
            <label htmlFor="large">Büyük</label>
            </div>
            </div>
             {errors.size && <p>{errors.size.message}</p>}
        <div className='drop'>
            <label>
            <h3>Hamur Seç</h3>
            <select 
            name="type" 
            defaultValue="default" 
            {...register('type', {
                required: 'select type',
              })}
            >
                <option value="default" disabled="true" >Hamur Kalınlığı</option>
                <option value="ince">İnce</option>
                <option value="normal">Normal</option>
                <option value="kalın">Kalın</option>
            </select>
            </label>
            </div>
             {errors.type && <p>{errors.type.message}</p>}
        </div>
        <div className='checkboxes'>
            <h3>Ek Malzemeler</h3>
            <h4>En fazla 10 adet seçebilirsiniz!</h4>
            <div className="checkbox">
            {Toppings.map((val)=> {return<div className="topping"><input  type="checkbox" name="topping" value={val} id={val} 
            {...register('topping', {
                required: 'min 4 max 10 toppings',
                min:4,
                max:10
              })} />
            <label htmlFor={val}>{val}</label></div>})}
            </div>
            </div>
            {errors.topping && <p>{errors.topping.message}</p>}
        <div className='input'> 
            <div>
            <label className="bold" htmlFor="name">Ad-Soyad</label><br/>
            <input 
            name="name" 
            type="text" 
           {...register('name', {
                required: 'name is required',
                minLength: {
                  value: 3,
                  message: 'at least 3 Characters',
                },
              })}/>
            </div>
            {errors.name && <p>{errors.name.message}</p>}
            <div>
            <label className="bold" htmlFor="not">Sipariş Notunuz:</label><br/>
            <textarea placeholder="Siparişinize eklemek istediğiniz not var mı?" 
            id="not" 
            name="not" 
            type="text" 
             {...register('type')}
            rows="5" 
            cols="100" />
            </div>
            <hr />      
        </div>
         <div className="summary">
        <div className="counter" >
            <button className="azalt" onClick={azalt}>-</button> 
            <p>{counter}</p>
            <button className="arttır" onClick={arttır}>+</button> 
         </div>
         <div className="priceS">
            <h3>Sipariş Toplamı:</h3>
            <p>Seçimler: <p>{ekMalzeme}</p>  </p>
            <p>Toplam: <p>{total}</p>  </p>
            <button disabled={!valid} >Sipariş Ver</button>
         </div>
         </div>
         </form>
        </>
    )
}

export default PizzaPage