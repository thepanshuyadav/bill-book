import AddIcon from "@mui/icons-material/Add";

export const ListViewHeader = (props) => {
    return (
        <div className="Listview-header">
            <h1>{props.title}</h1>
            <button className="App-button" onClick={props.toggleFunction}>
                {props.icon}
                <p>{props.buttonText}</p>
            </button>
        </div>
    )
}