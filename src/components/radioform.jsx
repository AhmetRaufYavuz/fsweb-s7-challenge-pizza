
export default function RadioSelector (props){
    const{onChange}=props;
    return(
        <>
        <div className='radio'>
            <h3>Boyut seç</h3>
            <div className="pizzaSize">
            <input type="radio" name="size" value="Küçük" id="regular"  onChange={onChange} />
            <label htmlFor="regular">Küçük</label>
            </div>
            <div className="pizzaSize">
            <input type="radio" name="size" value="Orta" id="medium" onChange={onChange} />
            <label htmlFor="medium">Orta</label>
            </div>
            <div className="pizzaSize">
            <input type="radio" name="size" value="Büyük" id="large" onChange={onChange} />
            <label htmlFor="large">Büyük</label>
            </div>
            </div>
        </>
    )
}