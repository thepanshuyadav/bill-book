import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import DescriptionIcon from "@mui/icons-material/Description";

export const regex = {
    name: /^[a-zA-Z1-9 ,.'-]+$/i,
    detail: /^[a-zA-Z\d\s,'-]*$/,
    phone: /^\d{10}$/,
    number: /^(\d+(\.\d+)?)$/,
    email: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
}
export const CUSTOMER_FORM_METADATA = {
    TITLE: "Add new customer",
    FIELDS: [
        {
            id: 1,
            name: "name",
            type: "text",
            label: "Name",
            error: "Username should be alphanumeric character only",
            pattern: "^[A-Za-z ,.'-]+$"
        },
        {
            id: 2,
            name: "email",
            type: "email",
            label: "Email Address",
            error: "Invalid email address"
        },
        {
            id: 3,
            name: "contact",
            type: "text",
            label: "Phone Number",
            error: "10 digit phone number",
            pattern: "^\\d{10}$"
        },
        {
            id: 4,
            name: "address",
            type: "text",
            label: "Address",
            error: "Add valid address",
            pattern: "^[A-Za-z0-9 ,.'-]+$"
        }
    ]
}
export const ITEM_FORM_METADATA = {
    TITLE: "Add new item",
    FIELDS: [
        {
            id: 1,
            name: "name",
            type: "text",
            label: "Name",
            error: "Enter valid item name",
            pattern: "^[A-Za-z0-9 ,.'-]+$"
        },
        {
            id: 2,
            name: "description",
            type: "text",
            label: "Description",
            error: "Enter valid description",
            pattern: "^[A-Za-z0-9 ,.'-]+$"
        },
        {
            id: 3,
            name: "amount",
            type: "number",
            label: "Price",
            error: "Enter valid price",
            pattern: "/^[1-9]\\d*$/g"
            // pattern: "^(\\d+(\\.\\d+)?)$"
        },
        {
            id: 4,
            name: "stock",
            type: "number",
            label: "Stock",
            error: "Enter valid stock",
            pattern: "^(\\d+(\\.\\d+)?)$"
        }
    ]
}

export const ITEM_TABLE_METADATA = {
    TITLES : ["Name", "Description", "Amount", "Stock", "Created On"],
    COLUMN_KEYS : ["name", "description", "amount", "stock", "created_at"]
}
export const INVOICE_TABLE_METADATA = {
    TITLES : ["Issued At", "Customer ID", "Reference No", "Status", "Amount"],
    COLUMN_KEYS : ["issued_at", "customer", "reference_no", "status", "amount"]
}
export const CUSTOMER_TABLE_METADATA = {
    TITLES : ["Name", "Phone", "Email", "Address", "Created On"],
    COLUMN_KEYS : ["name", "contact", "email", "address", "created_at"]
}

export const CUSTOMER_SELECT_TABLE_METADATA = {
    TITLES : ["Name", "Phone", "Email"],
    COLUMN_KEYS : ["name", "contact", "email"]
}

export const ITEM_SELECT_TABLE_METADATA = {
    TITLES : ["Name", "Description", "Amount", "Stock"],
    COLUMN_KEYS : ["name", "description", "amount", "stock"]
}

export const DISPATCH_ACTIONS = {
    FETCH_CUSTOMERS: 'FETCH_CUSTOMERS',
    FETCH_ITEMS: 'FETCH_ITEMS',
    FETCH_INVOICES: 'FETCH_INVOICES',
    CUSTOMER_FORM_CHANGE: 'CUSTOMER_FORM_CHANGE',
    ITEM_FORM_CHANGE: 'ITEM_FORM_CHANGE',
    ADD_NEW_CUSTOMER: 'ADD_NEW_CUSTOMER',
    ADD_NEW_ITEM: 'ADD_NEW_ITEM',
    OPEN_MODAL: 'OPEN_MODAL',
    OPEN_MODAL_SELECT: 'OPEN_MODAL_SELECT',
    UPDATE_INVOICE:'UPDATE_INVOICE',
    NEW_INVOICE_NOTES_CHANGE: 'NEW_INVOICE_NOTES_CHANGE',
    PAGINATION_RESET: 'PAGINATION_RESET',
    PAGINATION_MOVE_FORWARD: 'PAGINATION_MOVE_FORWARD',
    PAGINATION_MOVE_BACKWARD: 'PAGINATION_MOVE_BACKWARD',
    PAGINATION_SET_STEP: 'PAGINATION_SET_STEP',
    SELECT_CUSTOMER: 'SELECT_CUSTOMER',
    ISSUE_DATE_CHANGE: 'ISSUE_DATE_CHANGE',
    DUE_DATE_CHANGE: 'DUE_DATE_CHANGE',
    REFERENCE_NUMBER_CHANGE: 'REFERENCE_NUMBER_CHANGE',
    UPDATE_ITEMS: 'UPDATE_ITEMS',
    UPDATE_TOTAL_AMOUNT: 'UPDATE_TOTAL_AMOUNT'
}

export const CUSTOMER_SEARCH_FIELDS = [
    {TITLE: "Name", KEY: "name"},
    {TITLE: "Phone", KEY: "contact"},
    {TITLE: "Email", KEY: "email"}
]
export const INVOICE_SEARCH_FIELDS = [{TITLE: "Customer ID", KEY: "customer"}]
export const ITEM_SEARCH_FIELDS = [
    {TITLE: "Name", KEY: "name"},
    {TITLE: "Description", KEY: "description"}
]
export const NAV_BAR_DATA = [
    {title: 'Customers', icon: <PersonIcon/>, link: "/customers"},
    {title: 'Items', icon: <StarIcon/>, link: "/items"},
    {title: 'Invoices', icon: <DescriptionIcon/>, link: "/invoices"}
]