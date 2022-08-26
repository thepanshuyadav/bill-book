import {useDispatch, useSelector} from "react-redux";
import {newInvoiceDueDateSelector, newInvoiceIssueDateSelector} from "../../../store/store";
import {DISPATCH_ACTIONS} from "../../../utils/constants";

export const InvoiceDetail = () => {
    const dispatch = useDispatch()
    const issueDate = useSelector(newInvoiceIssueDateSelector)
    const dueDate = useSelector(newInvoiceDueDateSelector)
    const formIssueDateChange = (event) => {
        dispatch({
            type: DISPATCH_ACTIONS.ISSUE_DATE_CHANGE,
            payload: event.target.value
        })
    }
    const formDueDateChange = (event) => {
        dispatch({
            type: DISPATCH_ACTIONS.DUE_DATE_CHANGE,
            payload: event.target.value
        })
    }
    const formReferenceChange = (event) => {
        dispatch({
            type: DISPATCH_ACTIONS.REFERENCE_NUMBER_CHANGE,
            payload: event.target.value
        })
    }
    return (
            <form className="Invoice-detail">
                <div>
                    <p>Issued At</p>
                    <input type="date" value={issueDate} onChange={formIssueDateChange}/>
                </div>
                <div>
                    <p>Due At</p>
                    <input type="date" value={dueDate} onChange={formDueDateChange}/>
                </div>
                <div>
                    <p>Reference Number</p>
                    <input onChange={formReferenceChange} placeholder="Reference Number"/>
                </div>
            </form>
    )
}