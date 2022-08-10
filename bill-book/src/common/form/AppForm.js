import {FormField} from "./FormField";

export const AppForm = ({handleSubmit, fields}) => {

    return (
        <form className="Form" onSubmit={handleSubmit}>
            {fields.map((field) =>
                <FormField
                    key={field.id}
                    name={field.name}
                    label={field.label}
                    type={field.type}
                    pattern={field.pattern}
                    error={field.error}/>
            )}
            <input type="submit"/>

        </form>
    )
}