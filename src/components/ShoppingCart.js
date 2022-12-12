import { useSelector } from 'react-redux'


const ShoppingCart = () => {
    const total = useSelector(state => state.shoppingCart.total)

    return (
        <div className="shopping-cart">
            Total: {total} $
        </div>
    )
}

export default ShoppingCart