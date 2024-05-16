import React, { useState } from "react";

export default function Summary (props){
    const [counter, setCounter] = useState(1);
    const {form,valid,submit} = props;
    const handleClick1 = () => {
        setCounter(counter + 1);};

        const handleClick2 = () => {
            if(counter===0){
                return
            }else{
            setCounter(counter - 1);}
        };
let ekMalzeme = ((form.topping.length)*5);
    return(
        <>
        <div className="summary">
        <div className="counter" >
            <button className="azalt" onClick={handleClick2}>-</button> 
            <p>{counter}</p>
            <button className="arttır" onClick={handleClick1}>+</button> 
         </div>
         <div className="priceS">
            <h3>Sipariş Toplamı:</h3>
            <p>Seçimler: <p>{ekMalzeme}</p>  </p>
            <p>Toplam: <p>{(Number(form.price)*counter)+ekMalzeme}</p>  </p>
            <button disabled={!valid} onClick={submit} >Sipariş Ver</button>
         </div>
         </div>
        </>
    )
}