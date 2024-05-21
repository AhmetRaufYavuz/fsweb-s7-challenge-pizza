const Toppings =["Pepperonni","Biber","Domates","Sosis","Mısır","Sucuk","Kanada Jambonu","Ananas" ,"Tavuk Izgara" , "Jalapeno", "Kabak", "Soğan","Sarımsak"]

export default function ToppingMenu(props){
    const {onChange} = props
    return(
        <>
         <div className='checkboxes'>
            <h3>Ek Malzemeler</h3>
            <h4>En fazla 10 adet seçebilirsiniz!</h4>
            <div className="checkbox">
            {Toppings.map((val)=> {return<div className="topping"><input  type="checkbox" name="topping" value={val} id={val} onChange={onChange} />
            <label htmlFor={val}>{val}</label></div>})}
            </div>
            </div>
        </>
    )
}