import {DISPATCH_ACTIONS} from "../../utils/constants";

const itemState = {
    item: {
        name: "",
        description: "",
        amount: "",
        stock: ""
    },
    items: []
}
export const ItemReducer = (state = itemState, action) => {
    switch (action.type) {
        case DISPATCH_ACTIONS.FETCH_ITEMS:
            return {
                ...state,
                items: [...action.payload]
            }
        case DISPATCH_ACTIONS.ITEM_FORM_CHANGE:
            return {
                ...state,
                item: action.payload
            }
        case DISPATCH_ACTIONS.ADD_NEW_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        default:
            return state
    }
}