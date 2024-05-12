import { useHistory } from 'react-router-dom';
import "../styles/landing.css"
export default function LandingPage (){
    const history = useHistory();
    function toMainPage() {
        history.push('/Form');
      }
    return(
        <div className='landing'>
            <h1>Teknolojik Yemekler</h1>
            <h2>KOD ACIKTIRIR</h2>
            <h2>PİZZA,DOYURUR</h2>
            <button onClick={toMainPage} >Acıktım</button>
        </div>
    )
}