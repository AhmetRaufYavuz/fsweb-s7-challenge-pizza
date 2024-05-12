export default function RadioSelector (props){
    return(
        <>
        <div className='radio'>
            <h3>Boyut seç</h3>

            <input type="radio" name="topping" value="Regular" id="regular" />
            <label htmlFor="regular">Küçük</label>

            <input type="radio" name="topping" value="Medium" id="medium" />
            <label htmlFor="medium">Orta</label>

            <input type="radio" name="topping" value="Large" id="large" />
            <label htmlFor="large">Büyük</label>
            </div>
        </>
    )
}