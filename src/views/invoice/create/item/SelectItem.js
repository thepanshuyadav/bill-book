import {
    DISPATCH_ACTIONS,
    ITEM_SEARCH_FIELDS,
    ITEM_SELECT_TABLE_METADATA,
} from "../../../../utils/constants";
import {ListView} from "../../../../common/listview/ListView";
import {sanitizeItemData} from "../../../../utils/data_utils";
import {itemListSelector, newInvoiceItemsSelector} from "../../../../store/store";
import {useDispatch, useSelector} from "react-redux";

const entity = {
    name: "items",
    type: "item-select",
    url: "item",
    initialFilter : "name",
    selector: itemListSelector,
    dispatchFetchAction: DISPATCH_ACTIONS.FETCH_ITEMS,
    sanitizeData: sanitizeItemData,
    searchFields: ITEM_SEARCH_FIELDS,
    table: {
        titles : ITEM_SELECT_TABLE_METADATA.TITLES,
        keys : ITEM_SELECT_TABLE_METADATA.COLUMN_KEYS
    }

}

export const SelectItem = () => {
    const dispatch = useDispatch()
    const items = useSelector(newInvoiceItemsSelector)
    const handleRowClick = (item) => {
        console.log(item)
        const rest_items = items.filter((itemPresent) => itemPresent.id !== item.id)
        dispatch({
            type: DISPATCH_ACTIONS.UPDATE_ITEMS,
            payload: [
                ...rest_items,
                {
                    ...item,
                    quantity: 1
                }
            ]
        })

        dispatch({
            type: DISPATCH_ACTIONS.OPEN_MODAL_SELECT,
            payload: {
                open: false,
                type: "item"
            }
        })
    }
    return (
        <div className="Select-container">
            <div className="Select-header">
                <h1>Select item</h1>
                <button
                    className="Modal-cancel-button"
                    onClick={() => {
                        dispatch({
                            type: DISPATCH_ACTIONS.OPEN_MODAL_SELECT,
                            payload: {
                                type: "item",
                                open: false
                            }
                        })
                    }}>
                    X
                </button>
            </div>

            <ListView entity = {entity} handleRowClick={handleRowClick}/>
        </div>
    )
}