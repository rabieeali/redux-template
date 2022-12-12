import { useState } from "react";
import { useDispatch } from "react-redux"


const Product = ({ id, title, image, price }) => {
    const [count, setCount] = useState(0)

    const dispatch = useDispatch();


    const addProduct = () => {
        setCount(pre => pre + 1)
        dispatch({ type: "ADD_TO_CART", payload: id })
    }

    const removeFromCart = () => {
        setCount(pre => pre = 0)
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    const subtract = () => {
        setCount(pre => pre - 1)
        dispatch({ type: "SUB_QUANTITY", payload: id })
    }

    return (
        <section className="card-wrapper">
            <div className="card">
                <img src={image} alt={title} />
                {title}
                <button onClick={addProduct}>Add {price}$ {count === 0 ? "" : "(" + count + ")"}</button>
            </div>
            {count > 0 &&
                (<div className="operations">
                    <button onClick={subtract}>-</button>
                    <button onClick={removeFromCart}>Remove</button>
                </div>)
            }
        </section>
    )
}

export default Product