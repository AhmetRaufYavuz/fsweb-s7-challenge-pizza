export default function DropdownMenu(props){
    return(
        <>
        <div className='drop'>
            <label>
            <h3>Hamur Seç</h3>
            <select name="hamur" defaultValue="default">
                <option value="default">Hamur Kalınlığı</option>
                <option value="ince">İnce</option>
                <option value="normal">Normal</option>
                <option value="kalın">Kalın</option>
            </select>
            </label>
            </div>
        </>
    )
}