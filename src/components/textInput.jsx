export default function Texts (props){
    const {onChange} = props
    return(
        <>
         <div className='input'> 
            
            <label>
                Ad-Soyad
                <input name="name" type="text" onChange={onChange}/>
            </label>
            
            <label htmlFor="not">Sipariş Notunuz:</label>
            <input placeholder="Siparişinize eklemek istediğiniz not var mı?" id="not" name="not" type="textarea" onChange={onChange} />
            <hr />
            
        </div>
        </>
    )
}