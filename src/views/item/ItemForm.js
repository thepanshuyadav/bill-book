import {AppForm} from "../../common/form/AppForm";
import {DISPATCH_ACTIONS, ITEM_FORM_METADATA} from "../../utils/constants";
import {
    structureItemRequestData, structureItemResponseData, validateItemFields
} from "../../utils/data_utils";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {itemSelector} from "../../store/store";


export const ItemForm = () => {
    const dispatch = useDispatch()
    const itemFields = useSelector(itemSelector)

    const formChangeHandler = (event, name) => {
        event.preventDefault()
        dispatch({
            type: DISPATCH_ACTIONS.ITEM_FORM_CHANGE,
            payload: {
                ...itemFields,
                [name]: event.target.value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!validateItemFields(itemFields)) {
            alert("Invalid data")
            return
        }
        const data = structureItemRequestData(itemFields)
        console.log(data)
        axios.post('http://127.0.0.1:8080/v1/item/add', data).then(res => {
            console.log(res.data)
            const item = structureItemResponseData(res.data)
            console.log(item)
            dispatch({
                type: DISPATCH_ACTIONS.ADD_NEW_ITEM,
                payload: item

            })

        }).catch(err => {
            alert(err.response.data.error)
        })
        dispatch({
            type: DISPATCH_ACTIONS.OPEN_MODAL
        })
    }

    return (
        <div className="Form-card">
            <div className="Form-header">
                <p>{ITEM_FORM_METADATA.TITLE}</p>
                <button
                    className="Modal-cancel-button"
                    onClick={() => {
                        dispatch({
                            type: DISPATCH_ACTIONS.OPEN_MODAL
                        })
                    }}>
                    X
                </button>
            </div>
            <AppForm
                fields={ITEM_FORM_METADATA.FIELDS}
                handleSubmit={handleSubmit}
                formChangeHandler={formChangeHandler}
                values={itemFields}/>
        </div>
    )
}