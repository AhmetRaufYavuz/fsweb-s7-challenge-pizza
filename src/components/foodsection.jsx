import { Yemek } from "../sahteVeri"
export default function Food(props){
    return(
        <div>
            <h1>{Yemek.name}</h1>
            <div>
            <h2>{Yemek.price}</h2>
            <h2>{Yemek.rating}</h2>
            <h2>{Yemek.review}</h2>  
            </div>
            <article>{Yemek.detail}</article>
        </div>
    )
}