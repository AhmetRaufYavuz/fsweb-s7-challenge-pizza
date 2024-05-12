export default function Texts (){
    return(
        <>
         <div className='input'> 
            
            <label>
                Ad-Soyad
                <input name="name" />
            </label>
            
            <label htmlFor="not">Sipariş Notunuz:</label>
            <input id="not" name="not" type="textarea" />
            <hr />
            
        </div>
        </>
    )
}