import '../../styles/Form.css'
import {AppForm} from "../../common/form/AppForm";
import {CUSTOMER_FORM_METADATA, DISPATCH_ACTIONS} from "../../utils/constants";
import axios from "axios";
import {
    structureCustomerRequestData,
    structureCustomerResponseData,
    validateCustomerFields
} from "../../utils/data_utils";
import {useDispatch, useSelector} from "react-redux";
import {customerSelector} from "../../store/store";

export const CustomerForm = () => {
    const dispatch = useDispatch()
    const customerFields = useSelector(customerSelector)

    const formChangeHandler = (event, name) => {
        event.preventDefault()
        dispatch({
            type: DISPATCH_ACTIONS.CUSTOMER_FORM_CHANGE,
            payload: {
                ...customerFields,
                [name]: event.target.value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(!validateCustomerFields(customerFields)) {
            alert("Invalid data")
            return
        }

        const data = structureCustomerRequestData(customerFields)
        // console.log(data)
        axios.post('http://127.0.0.1:8080/v1/customer/add', data).then(res => {
            const customer = structureCustomerResponseData(res.data)
            console.log(customer)
            dispatch({
                type: DISPATCH_ACTIONS.ADD_NEW_CUSTOMER,
                payload: customer
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
                <p>{CUSTOMER_FORM_METADATA.TITLE}</p>
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
            <AppForm fields={CUSTOMER_FORM_METADATA.FIELDS}
                     handleSubmit={handleSubmit}
                     formChangeHandler={formChangeHandler}
                     values={customerFields}/>
        </div>
    )
}