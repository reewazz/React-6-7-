import { useParams, useSearchParams } from "react-router-dom"

export const ProductDetailPage = ()=> {

    const product = useParams()

    const [searchParams,setSearchParams] = useSearchParams()

    const price = searchParams.get("price")
    const rating = searchParams.get("rating")

    
    return (
        <>
        <h1>This is detail page of : {product.name}</h1>
        <h1>Price: {price}</h1>
        <h1>Rating: {rating}</h1>
        </>
    )
}


