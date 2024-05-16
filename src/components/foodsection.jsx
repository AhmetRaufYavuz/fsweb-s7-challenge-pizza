import { Yemek } from "../sahteVeri"
export default function Food(props){
    return(
        <>
        <div className="foodInfo">
            <h1>{Yemek.name}</h1>
            <p className="price">{Yemek.price}</p>
            <p className="rating">{Yemek.rating}</p>
            <p className="review">{Yemek.review}</p>
            <article className="foodDetail">{Yemek.detail}</article>
        </div>
        
        </>
    )
}