import '../../styles/Listheader.css'
export const ListViewHeader = (props) => {
    return (

            <section className="Listview-header" data-testid="header">
                <h1 className="List-heading" data-testid="heading">{props.heading}</h1>
                <button
                    className="Add-button"
                    onClick={props.buttonClickHandlerFunction}>
                    {props.icon}
                    <p>{props.buttonText}</p>
                </button>
            </section>

    )
}