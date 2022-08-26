import { useState } from "react";

export const FormField = ({name, label, type, error, pattern, values, formChangeHandler}) => {
    const [focused, setFocus] = useState(false)
    const handleFocus = () => {
        setFocus(true)
    }
    return (
        <div className="Form-field-container">
            <label>{label}</label>
            <input
                name={name}
                value={values[name]}
                data-testid={name}
                type={type}
                pattern={pattern}
                onChange={(event) => {
                    formChangeHandler(event, name)
                }}
                required
                onBlur={handleFocus }
                focused={focused.toString()}
            />
            <p className="Error-message">{error}</p>

        </div>
    )
}
