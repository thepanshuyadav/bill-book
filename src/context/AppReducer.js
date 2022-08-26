import {DISPATCH_ACTIONS} from "../utils/constants";

export const AppReducer = (state, action) => {
    switch (action.type) {
        case DISPATCH_ACTIONS.FETCH_CUSTOMERS:
            return {
                ...state,
                customers: [...action.payload]
            }
        case DISPATCH_ACTIONS.FETCH_ITEMS:
            return {
                ...state,
                items: [...action.payload]
            }
        case DISPATCH_ACTIONS.FETCH_INVOICES:
            return {
                ...state,
                invoices: [...action.payload]
            }

        case DISPATCH_ACTIONS.CUSTOMER_FORM_CHANGE:
            return {
                ...state,
                formFields: {
                    ...state.formFields,
                    customer: action.payload
                }
            }
        case DISPATCH_ACTIONS.ITEM_FORM_CHANGE:
            return {
                ...state,
                formFields: {
                    ...state.formFields,
                    item: action.payload
                }
            }

        case DISPATCH_ACTIONS.ADD_NEW_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, action.payload]
            }
        case DISPATCH_ACTIONS.ADD_NEW_ITEM:
            console.log(action.payload)
            return {
                ...state,
                items: [...state.items, action.payload]
            }

        case DISPATCH_ACTIONS.OPEN_MODAL:
            return {
                ...state,
                openModal: !state.openModal
            }

        case DISPATCH_ACTIONS.OPEN_MODAL_SELECT:
            return {
                ...state,
                openModalSelect: action.payload
            }
        case DISPATCH_ACTIONS.UPDATE_INVOICE:
            return {
                ...state,
                invoices: action.payload
            }
        default:
            return state
    }
}