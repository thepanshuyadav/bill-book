import {useContext, useState} from "react";
import '../styles/Form.css'
import {AppContext} from "../context/AppContext";
import {AppForm} from "../common/form/AppForm";
const fields = [
    {
        id: 1,
        name: "name",
        type: "text",
        label: "Name",
        error: "Username should be 4-15 characters",
        pattern: "^[A-Za-z0-9]{4,15}$"
    },
    {
        id: 2,
        name: "email",
        type: "email",
        label: "Email Address",
        error: "Invalid email address"
    },
    {
        id: 3,
        name: "phone",
        type: "number",
        label: "Phone Number",
        error: "10 digit phone number",
        pattern: "^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$"
    },
]
export const CustomerForm = () => {
    const {customerFormFields, dispatch} = useContext(AppContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(customerFormFields)

        dispatch({
            type: "OPEN_MODAL"
        })

        // TODO: Implement using FormData
        // const data = new FormData(event.target)
        // console.log(event.target)
        // console.log(Object.entries(data.entries()))
    }


    return (
            <div className="Form-card">
                <div>
                    <button
                        className="Modal-cancel-button"
                        onClick={() => {
                            dispatch({
                                type: 'OPEN_MODAL'
                            })
                        }}>
                        X
                    </button>
                </div>
                <AppForm fields={fields} handleSubmit={handleSubmit}/>
            </div>
    )
}