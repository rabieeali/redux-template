const FAKE_DATA = [
    {
        id: "1",
        title: "iphone 14",
        image: "https://avandmobile.com/wp-content/uploads/2022/07/Apple-iPhone-14-iPhone-14-Plus-2up-purple-220907_inline.jpg.large_.jpg",
        price: "1200"
    },
    {
        id: "2",
        title: "playstation 5",
        image: "https://cdn.pocket-lint.com/r/s/970x/assets/images/154419-games-review-hands-on-playstation-5-hands-on-pics-image1-tbq3hzlrkw.jpg",
        price: "500"
    },
    {
        id: "3",
        title: "coffee machine",
        image: "https://www.ariete.net/media/images/product/main/ariete-1313-macchina-caffe-espresso-in-metallo-con-macinacaffe-1f052c121be45a5b6d7c230cd2cb5af3.jpg",
        price: "890"
    }
]


const initialState = {
    items: FAKE_DATA,
    cart: [],
    total: 0
}


export const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_TO_CART": {
            let addedItem = state.items.find(item => item.id === action.payload)
            // check if the action id exists in the addedItems
            let existed_item = state.cart.find(item => item.id === action.payload)

            if (existed_item) {
                addedItem.quantity += 1
                return {
                    ...state,
                    total: state.total + (+addedItem.price)
                }
            } else {
                addedItem.quantity = 1;
                let newTotal = state.total + (+addedItem.price)

                return {
                    ...state,
                    cart: [...state.cart, addedItem],
                    total: newTotal
                }

            }
        }
        case "REMOVE_ITEM": {
            let itemToRemove = state.cart.find(item => item.id === action.payload)
            let new_items = state.cart.filter(item => item.id !== action.payload)

            // calculating the total
            let newTotal = state.total - ((+itemToRemove.price) * (+itemToRemove.quantity))

            return {
                ...state,
                cart: new_items,
                total: newTotal
            }
        }


        case "SUB_QUANTITY": {
            let addedItem = state.items.find(item => item.id === action.payload)
            //if the qty === 0 then it should be removed
            if (addedItem.quantity === 1) {
                let new_items = state.cart.filter(item => item.id !== action.payload)
                let newTotal = state.total - (+addedItem.price)
                return {
                    ...state,
                    cart: new_items,
                    total: newTotal
                }
            }
            else {
                addedItem.quantity -= 1
                let newTotal = state.total - (+addedItem.price)
                return {
                    ...state,
                    total: newTotal
                }
            }

        }

        default:
            return state;
    }
}