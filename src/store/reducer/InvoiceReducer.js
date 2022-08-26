
import {DISPATCH_ACTIONS} from "../../utils/constants";


// eslint-disable-next-line no-extend-native
Date.prototype.date = function () {
    let mm = this.getMonth() + 1; // getMonth() is zero-based
    let dd = this.getDate();

    return [this.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd
    ].join('-');
}
let date = new Date();
let today = date.date()



const invoiceState = {
    invoices: [],
    customer: {
        id: "",
        name: "Add customer",
        email: "Add email",
        contact: "Add phone number"
    },
    openModalSelect: {
        open: false,
        type: "customer"
    },
    items: [],
    issue_date: today,
    due_date: today,
    reference_number: "",
    notes: "",
    total_amount: 0
}
export const InvoiceReducer = (state = invoiceState, action) => {
    switch (action.type) {
        case DISPATCH_ACTIONS.FETCH_INVOICES:
            return {
                ...state,
                invoices: [...action.payload]
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
        case DISPATCH_ACTIONS.NEW_INVOICE_NOTES_CHANGE:
            return {
                ...state,
                notes: action.payload
            }
        case DISPATCH_ACTIONS.SELECT_CUSTOMER:
            return {
                ...state,
                customer: action.payload
            }
        case DISPATCH_ACTIONS.ISSUE_DATE_CHANGE:
            return {
                ...state,
                issue_date: action.payload
            }
        case DISPATCH_ACTIONS.DUE_DATE_CHANGE:
            return {
                ...state,
                due_date: action.payload
            }
        case DISPATCH_ACTIONS.REFERENCE_NUMBER_CHANGE:
            return {
                ...state,
                reference_number: action.payload
            }

        case DISPATCH_ACTIONS.UPDATE_ITEMS:
            return {
                ...state,
                items: action.payload
            }
        case DISPATCH_ACTIONS.UPDATE_TOTAL_AMOUNT:
            return {
                ...state,
                total_amount: action.payload
            }
        default:
            return state
    }
}