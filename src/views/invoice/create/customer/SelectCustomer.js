import {CUSTOMER_SEARCH_FIELDS, CUSTOMER_SELECT_TABLE_METADATA, DISPATCH_ACTIONS} from "../../../../utils/constants";
import "../../../../styles/Table.css"
import {ListView} from "../../../../common/listview/ListView";
import {sanitizeCustomerData} from "../../../../utils/data_utils";
import {customerListSelector} from "../../../../store/store";
import {useDispatch} from "react-redux";

const entity = {
    name: "customers",
    url: "customer",
    type: "customer-select",
    initialFilter: "name",
    selector: customerListSelector,
    dispatchFetchAction: DISPATCH_ACTIONS.FETCH_CUSTOMERS,
    sanitizeData: sanitizeCustomerData,
    searchFields: CUSTOMER_SEARCH_FIELDS,
    table: {
        titles: CUSTOMER_SELECT_TABLE_METADATA.TITLES,
        keys: CUSTOMER_SELECT_TABLE_METADATA.COLUMN_KEYS
    }

}

export const SelectCustomer = () => {
    const dispatch = useDispatch()
    const handleRowClick = (customer) => {
        console.log(customer)
        dispatch({
            type: DISPATCH_ACTIONS.SELECT_CUSTOMER,
            payload: customer
        })
        dispatch({
            type: DISPATCH_ACTIONS.OPEN_MODAL_SELECT,
            payload: {
                open: false,
                type: "customer"
            }
        })
    }
    return (
        <div className="Select-container">
            <div className="Select-header">
                <h1>Select customer</h1>
                <button
                    className="Modal-cancel-button"
                    onClick={() => {
                        dispatch({
                            type: DISPATCH_ACTIONS.OPEN_MODAL_SELECT,
                            payload: {
                                type: "customer",
                                open: false
                            }
                        })
                    }}>
                    X
                </button>
            </div>

            <ListView entity={entity} handleRowClick={handleRowClick}/>
        </div>
    )
}