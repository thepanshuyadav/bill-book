import {useContext, useState} from "react";
import {AppContext} from "../../context/AppContext";

export const FormField = ({name, label, type, error, pattern}) => {
    const [focused, setFocus] = useState(false)
    const {customerFormFields, dispatch} = useContext(AppContext)
    const handleFocus = () => {
        setFocus(true)
    }
    return (
        <div className="Form-field-container">
            <label>{label}</label>
            <input
                name={name}
                value={customerFormFields[name]}
                type={type}
                pattern={pattern}
                onChange={(event) => {
                    event.preventDefault()
                    dispatch({
                        type: "CUSTOMER_FORM_CHANGE",
                        payload: {
                            ...customerFormFields,
                            [name]: event.target.value
                        }
                    })
                }}
                required
                onBlur={handleFocus }
                focused={focused.toString()}
            />
            <p className="Error-message">{error}</p>

        </div>
    )
}
