import '../../styles/Table.css';
import {CUSTOMER_SEARCH_FIELDS, CUSTOMER_TABLE_METADATA, DISPATCH_ACTIONS} from "../../utils/constants";
import {sanitizeCustomerData} from "../../utils/data_utils";
import {ListViewHeader} from "../../common/listview/ListViewHeader";
import AddIcon from "@mui/icons-material/Add";
import {ListView} from "../../common/listview/ListView";
import {customerListSelector} from "../../store/store";
import {useDispatch} from "react-redux";

const entity = {
    name: "customers",
    type: "customer",
    url: "customer",
    initialFilter : "name",
    selector: customerListSelector,
    dispatchFetchAction: DISPATCH_ACTIONS.FETCH_CUSTOMERS,
    sanitizeData: sanitizeCustomerData,
    searchFields: CUSTOMER_SEARCH_FIELDS,
    table: {
        titles : CUSTOMER_TABLE_METADATA.TITLES,
        keys : CUSTOMER_TABLE_METADATA.COLUMN_KEYS
    }
}

const CustomerList = () => {
    const dispatch = useDispatch()
    const toggleVisibility = () => {
        dispatch({
            type: DISPATCH_ACTIONS.OPEN_MODAL
        })
    }

    return (
        <>
            <ListViewHeader
                heading="Customers"
                buttonClickHandlerFunction={toggleVisibility}
                buttonText="Add customer"
                icon={<AddIcon fontSize="small"/>}/>
            <ListView entity={entity} handleRowClick={() => {}}/>

        </>
    )
}
export default CustomerList