import {DISPATCH_ACTIONS} from "../../utils/constants";

const customerState = {
    customer: {
        name: "",
        email: "",
        contact: "",
        address: ""
    },
    customers: []

}
export const CustomerReducer = (state = customerState, action) => {
    switch (action.type) {
        case DISPATCH_ACTIONS.FETCH_CUSTOMERS:
            return {
                ...state,
                customers: [...action.payload]
            }

        case DISPATCH_ACTIONS.CUSTOMER_FORM_CHANGE:
            return {
                ...state,
                customer: action.payload
            }

        case DISPATCH_ACTIONS.ADD_NEW_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, action.payload]
            }

        default:
            return state
    }
}