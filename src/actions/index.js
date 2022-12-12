export const addToCart = (id) => ({ type: "ADD_TO_CART", payload: id })
export const removeFromCart = (id) => ({ type: "REMOVE_ITEM", payload: id })
export const subtractQuantity = (id) => ({ type: "SUB_QUANTITY", payload: id })