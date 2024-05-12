export default function DropdownMenu(props){
    const {onChange}=props
    return(
        <>
        <div className='drop'>
            <label>
            <h3>Hamur Seç</h3>
            <select name="type" defaultValue="default" onChange={onChange}>
                <option value="default" disabled="true" >Hamur Kalınlığı</option>
                <option value="ince">İnce</option>
                <option value="normal">Normal</option>
                <option value="kalın">Kalın</option>
            </select>
            </label>
            </div>
        </>
    )
}