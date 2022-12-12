import Product from "./Product"
import { useSelector } from "react-redux"


const ProductList = () => {
    const PRODUCTS = useSelector(state => state.shoppingCart.items)

    return (
        <>
            <h1>Redux Shopping Cart</h1>
            <section className="card-container">
                {PRODUCTS.map(p => (<Product key={p.id} {...p} />))}
            </section>
        </>
    )
}

export default ProductList