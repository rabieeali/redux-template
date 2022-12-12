// import PRODUCT_DATA from "../data/products.json"
import Product from "./Product"
import { useSelector } from "react-redux"


const ProductList = () => {
const PRODUCTS = useSelector(state => state.shoppingCart.items)

    return (
        <section className="card-container">
            {PRODUCTS.map(p => (<Product key={p.id} {...p} />))}
        </section>
    )
}

export default ProductList