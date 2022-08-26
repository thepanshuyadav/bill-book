import '../../styles/Table.css';
import {ListView} from "../../common/listview/ListView";
import {sanitizeItemData} from "../../utils/data_utils";
import {DISPATCH_ACTIONS, ITEM_SEARCH_FIELDS, ITEM_TABLE_METADATA} from "../../utils/constants";
import AddIcon from "@mui/icons-material/Add";
import {ListViewHeader} from "../../common/listview/ListViewHeader";
import {itemListSelector} from "../../store/store";
import {useDispatch} from "react-redux";

const entity = {
    name: "items",
    type: "item",
    url: "item",
    initialFilter : "name",
    selector: itemListSelector,
    dispatchFetchAction: DISPATCH_ACTIONS.FETCH_ITEMS,
    sanitizeData: sanitizeItemData,
    searchFields: ITEM_SEARCH_FIELDS,
    table: {
        titles : ITEM_TABLE_METADATA.TITLES,
        keys : ITEM_TABLE_METADATA.COLUMN_KEYS
    }
}

const ItemList = () => {
    const dispatch = useDispatch()
    const toggleVisibility = () => {
        dispatch({
            type: DISPATCH_ACTIONS.OPEN_MODAL
        })
    }
    return (
        <>
            <ListViewHeader
                heading="Items"
                buttonClickHandlerFunction={toggleVisibility}
                buttonText={`Add item`}
                icon={<AddIcon fontSize="small"/>}/>
            <ListView entity = {entity} handleRowClick={() => {}}/>
        </>

    )
}
export default ItemList
