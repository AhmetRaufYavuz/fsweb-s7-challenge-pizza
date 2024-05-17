import React, { useState } from "react";

export default function Summary (props){
    const {form,valid,submit,counter,arttır,azalt} = props;
    
let ekMalzeme = ((form.topping.length)*5);
let total =(Number(form.price)*counter)+ekMalzeme;

    return(
        <>
        <div className="summary">
        <div className="counter" >
            <button className="azalt" onClick={azalt}>-</button> 
            <p>{counter}</p>
            <button className="arttır"  onClick={arttır}>+</button> 
         </div>
         <div className="priceS">
            <h3>Sipariş Toplamı:</h3>
            <p>Seçimler: <p>{ekMalzeme}</p>  </p>
            <p>Toplam: <p>{total}</p>  </p>
            <button disabled={!valid} onClick={submit} >Sipariş Ver</button>
         </div>
         </div>
        </>
    )
}