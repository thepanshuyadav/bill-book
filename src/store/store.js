import {combineReducers, createStore} from '@reduxjs/toolkit'
import {CustomerReducer} from "./reducer/CustomerReducer";
import {ItemReducer} from "./reducer/ItemReducer";
import {InvoiceReducer} from "./reducer/InvoiceReducer";
import {AppReducer} from "./reducer/AppReducer";
export const CombinedReducer = combineReducers({
    customer: CustomerReducer,
    item: ItemReducer,
    invoice: InvoiceReducer,
    app: AppReducer
})
const store = createStore(CombinedReducer)

export const customerSelector = (state) => state.customer.customer
export const customerListSelector = (state) => state.customer.customers

export const itemSelector = (state) => state.item.item
export const itemListSelector = (state) => state.item.items

export const invoiceListSelector = (state) => state.invoice.invoices
export const newInvoiceNotesSelector = (state) => state.invoice.notes
export const newInvoiceModalSelector = (state) => state.invoice.openModalSelect
export const newInvoiceCustomerSelector = (state) => state.invoice.customer
export const newInvoiceItemsSelector = (state) => state.invoice.items
export const newInvoiceIssueDateSelector = (state) => state.invoice.issue_date
export const newInvoiceDueDateSelector = (state) => state.invoice.due_date
export const newInvoiceTotalAmountSelector = (state) => state.invoice.total_amount
export const newInvoiceReferenceSelector = (state) => state.invoice.reference_number

export const paginationSelector = (state) => state.app.pagination
export const modalSelector = (state) => state.app.openModal

export default store