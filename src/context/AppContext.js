import {createContext, useReducer} from "react";
import {AppReducer} from "./AppReducer";

const initialState = {
    openModal: false,
    formFields: {
        customer: {
            name: "",
            email: "",
            contact: "",
            address: ""
        },

    },
    navOption: "Customers",
    customers: [],
    items: [],
    invoices: [],
    openModalSelect: {
        open: false,
        type: "customer"
    }
}

export const AppContext = createContext()

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <AppContext.Provider value={
            {
                customers: state.customers,
                items: state.items,
                invoices: state.invoices,
                openModal: state.openModal,
                formFields: state.formFields,
                navOptionSelected: state.navOption,
                openModalSelect: state.openModalSelect,
                dispatch
            }}>
            {props.children}
        </AppContext.Provider>
    )

}

