import '../../styles/CreateInvoice.css'
import {ListViewHeader} from "../../common/listview/ListViewHeader";
import SaveIcon from '@mui/icons-material/Save';
import {InvoiceDetail} from "./create/InvoiceDetail";
import {CustomerDetail} from "./create/customer/CustomerDetail";
import {ItemDetail} from "./create/item/ItemDetail";
import {InvoiceSummary} from "./create/item/InvoiceSummary";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {DISPATCH_ACTIONS} from "../../utils/constants";
import {
    newInvoiceCustomerSelector,
    newInvoiceDueDateSelector,
    newInvoiceIssueDateSelector, newInvoiceItemsSelector,
    newInvoiceNotesSelector, newInvoiceReferenceSelector
} from "../../store/store";


Date.prototype.unix = function () {
    return this.getTime() / 1000
}
export const CreateInvoice = () => {
    const dispatch = useDispatch()
    const notes = useSelector(newInvoiceNotesSelector)
    const due_date = useSelector(newInvoiceDueDateSelector)
    const issue_date = useSelector(newInvoiceIssueDateSelector)
    const items = useSelector(newInvoiceItemsSelector)
    const customer = useSelector(newInvoiceCustomerSelector)
    const reference_number = useSelector(newInvoiceReferenceSelector)

    const notesChange = (event) => {
        dispatch({
            type: DISPATCH_ACTIONS.NEW_INVOICE_NOTES_CHANGE,
            payload: event.target.value
        })
    }

    const validateInvoice = () => ((due_date > issue_date && items.length > 0 && customer.id !== ""))

    const structureInvoiceRequestBody = () => {
        const issue = new Date(issue_date)
        const due = new Date(due_date)
        return {
            customer_id: customer.id,
            reference_number: reference_number,
            items: items.map((item) => {
                return {
                    id: item.id,
                    quantity: item.quantity
                }
            }),
            notes: notes,
            status: "unpaid",
            issue_date: issue.unix(),
            due_date: due.unix()
        }
    }
    const handleSubmit = () => {
        if(validateInvoice()) {
            const data = structureInvoiceRequestBody()
            console.log(data)
            axios.post('http://127.0.0.1:8080/v1/invoice/add', data).then(res => {
                console.log(res.data)
                alert("Invoice added successfully")
            }).catch(err => {
                alert(err.response.data.error)
            })
        }
        else {
            alert("Invalid data")
        }
    }

    return (
        // TODO: change backend
        // todo: separate modal for item/customer

        <>
            <ListViewHeader
                heading="New Invoice"
                buttonClickHandlerFunction={handleSubmit}
                buttonText="Save invoice"
                icon={<SaveIcon fontSize="small"/>}/>
            <div className="Create-invoice-container">
                <CustomerDetail/>
                <InvoiceDetail/>
                <ItemDetail/>

                <textarea className="Invoice-notes" placeholder="Notes" value={notes} onChange={notesChange}/>

                <InvoiceSummary/>
            </div>
        </>
    )
}