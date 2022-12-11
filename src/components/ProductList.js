import PRODUCT_DATA from "../data/products.json"
import Product from "./Product"

const ProductList = () => {

    return (
        <section className="card-container">
            {PRODUCT_DATA.map(p => (<Product key={p.id} {...p} />))}
        </section>
    )
}

export default ProductList