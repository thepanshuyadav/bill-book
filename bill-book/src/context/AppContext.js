import {createContext, useReducer} from "react";

const initialState = {
    customerFormVisible: false,
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
        case 'CUSTOMER_VIEW_TOGGLE':
            return {
                ...state,
                customerFormVisible: !state.customerFormVisible
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
                customerFormVisible: state.customerFormVisible,
                dispatch
            }}>
            {props.children}
        </AppContext.Provider>
    )

}

