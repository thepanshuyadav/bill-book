import {createContext, useReducer} from "react";

const initialState = {
    openModal: false,
    customerFormFields: {
        name: "",
        email: "",
        phone: ""
    },
    customers: [],
    items: []
}

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return {
                ...state,
                customers: [...action.payload]
            }
        case 'OPEN_MODAL':
            console.log("from open modal")
            return {
                ...state,
                openModal: !state.openModal
            }
        case 'CUSTOMER_FORM_CHANGE':
            return {
                ...state,
                customerFormFields: action.payload
            }

        default:
            return state
    }
}

export const AppContext = createContext()

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <AppContext.Provider value={
            {
                customers: state.customers,
                openModal: state.openModal,
                customerFormFields: state.customerFormFields,
                dispatch
            }}>
            {props.children}
        </AppContext.Provider>
    )

}

