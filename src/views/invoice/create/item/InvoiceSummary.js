import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {newInvoiceItemsSelector, newInvoiceTotalAmountSelector} from "../../../../store/store";
import {DISPATCH_ACTIONS} from "../../../../utils/constants";

export const InvoiceSummary = () => {
    const totalAmount = useSelector(newInvoiceTotalAmountSelector)
    const items = useSelector(newInvoiceItemsSelector)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch({
            type: DISPATCH_ACTIONS.UPDATE_TOTAL_AMOUNT,
            payload: items.reduce((sum, item) => sum+item.quantity*item.amount, 0)
        })
    }, [items])
    return (
        <>
            {totalAmount === 0 ? <></> :
            <div className="Invoice-summary">
                <table className="Invoice-summary-table">
                    <tbody>
                    {items.map((item) => {
                            if(item.quantity > 0) {
                                return (<tr key={item.id} className="Invoice-summary-row">
                                    <td>{item.name}</td>
                                    <td>{`x ${item.quantity}`}</td>
                                    <td className="Invoice-summary-item-amount">{item.amount * item.quantity}</td>
                                </tr>)
                            }
                        }
                    )}
                    </tbody>
                </table>
                <hr/>
                <div className="Invoice-summary-total">
                    <p>Total amount</p>
                    <p>{totalAmount}</p>

                </div>
            </div>
            }
        </>
    )
}