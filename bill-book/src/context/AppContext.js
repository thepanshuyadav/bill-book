import {createContext, useReducer} from "react";

const initialState = {
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
                dispatch
            }}>
            {props.children}
        </AppContext.Provider>
    )

}

