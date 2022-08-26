import {FormField} from "./FormField";

export const AppForm = ({handleSubmit, formChangeHandler, values, fields}) => {

    return (
        <form data-testid="form" className="Form" onSubmit={handleSubmit}>
            {fields.map((field) =>
                <FormField
                    key={field.id}
                    name={field.name}
                    label={field.label}
                    type={field.type}
                    pattern={field.pattern}
                    error={field.error}
                    values={values}
                    formChangeHandler={formChangeHandler}
                />
            )}
            <input type="submit"/>

        </form>
    )
}