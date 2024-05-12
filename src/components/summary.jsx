import React, { useState } from "react";

export default function Summary (props){
    const [counter, setCounter] = useState(0);
    
    const handleClick1 = () => {
        setCounter(counter + 1);};

        const handleClick2 = () => {
            // Counter state is decremented
            setCounter(counter - 1);
        };

    return(
        <>
        <div className="counter" >
            <button onClick={handleClick2}>-</button> 
            <p>{counter}</p>
            <button onClick={handleClick1}>+</button> 
         </div>
         <div className="price">
            <h3>Sipariş Toplamı:</h3>
            <p>Seçimler: <p>{}</p>  </p>
            <p>Toplam: <p>{}</p>  </p>
            <button>Sipariş Ver</button>
         </div>
        </>
    )
}