
export default function Texts (props){
    const {onChange} = props
    return(
        <>
         <div className='input'> 
            <div>
            <label className="bold" htmlFor="name">Ad-Soyad</label><br/>
            <input name="name" type="text" onChange={onChange}/>
            </div>
            <div>
            <label className="bold" htmlFor="not">Sipariş Notunuz:</label><br/>
            <textarea placeholder="Siparişinize eklemek istediğiniz not var mı?" id="not" name="not" type="text" onChange={onChange} rows="5" cols="100" />
            </div>
            <hr />      
        </div>
        </>
    )
}

