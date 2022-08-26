import {DISPATCH_ACTIONS} from "../../../../utils/constants";
import {SelectCustomer} from "./SelectCustomer";
import {useDispatch, useSelector} from "react-redux";
import {newInvoiceCustomerSelector, newInvoiceModalSelector} from "../../../../store/store";

export const CustomerDetail = () => {
    const dispatch = useDispatch()
    const openModalSelect = useSelector(newInvoiceModalSelector)
    const customer = useSelector(newInvoiceCustomerSelector)
    return (
        <div className="Customer-container">
            <div className="Customer-detail">
                <p className="Customer-bill-to">Bill to</p>
                <p>{customer.name}</p>
                <p>{customer.contact}</p>
                <p>{customer.email}</p>
            </div>
            <button onClick={() => {
                dispatch({
                    type: DISPATCH_ACTIONS.OPEN_MODAL_SELECT,
                    payload: {
                        open: true,
                        type: "customer"
                    }
                })
            }}>Change</button>
            {(openModalSelect.type === "customer" && openModalSelect.open === true) &&
                <div className="Modal-bg"><SelectCustomer className="Modal"/></div>}
        </div>
    )
}