import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {SelectItem} from "./SelectItem";
import {DISPATCH_ACTIONS} from "../../../../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {newInvoiceItemsSelector, newInvoiceModalSelector} from "../../../../store/store";

export const ItemDetail = () => {
    const dispatch = useDispatch()
    const openModalSelect = useSelector(newInvoiceModalSelector)
    const items = useSelector(newInvoiceItemsSelector)

    const handleChange = (event, item_id) => {
        if(event.target.value > 0) {
            const new_items = items.map((item) => {
                if (item.id === item_id && item.stock >= event.target.value) {
                    return {...item, quantity : parseInt(event.target.value, 10)}
                }
                return item
            })
            dispatch({
                type: DISPATCH_ACTIONS.UPDATE_ITEMS,
                payload: new_items
            })
        }
    }

    const deleteItem = (item_id) => {
        const new_items = items.filter((item) => item.id !== item_id)
        dispatch({
            type: DISPATCH_ACTIONS.UPDATE_ITEMS,
            payload: new_items
        })
    }
    return (
        <div className="Item-detail">
            {(items.length === 0) ? <h2>No items selected</h2> : <table>
                <thead>
                <tr type="invoice-items">
                    <td>Items</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>Amount</td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {items.map((item) =>
                    <tr type="invoice-items" key={item.id} className="Item-detail-row">
                        <td>{item.name}</td>
                        <td>
                            <input
                                value={item.quantity}
                                type="number"
                                min="1"
                                className="item-quantity"
                                onChange={(event) => handleChange(event, item.id)}/>
                        </td>
                        <td>{parseInt(item.amount, 10)}</td>
                        <td>{parseInt(item.amount, 10) * item.quantity}</td>
                        <td>
                            <DeleteIcon onClick={(event) => deleteItem(item.id)} className="Delete-button"/>

                        </td>
                    </tr>
                )}

                </tbody>
            </table>}
            <button className="Item-detail-add-button" onClick={() => {
                dispatch({
                    type: DISPATCH_ACTIONS.OPEN_MODAL_SELECT,
                    payload: {
                        open: true,
                        type: "item"
                    }
                })
            }}>
                <ShoppingBasketIcon/>
                <p>Add item</p>
            </button>
            {(openModalSelect.type === "item" && openModalSelect.open === true) &&
                <div className="Modal-bg">
                    <SelectItem className="Modal"/>
                </div>}
        </div>

    )
}