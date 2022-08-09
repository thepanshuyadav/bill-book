import {AppTableHeader} from "./AppTableHeader";
import {AppTableBody} from "./AppTableBody";

export const AppTable = (props) => {
    return (
        <div>
            <table>
                <AppTableHeader titles={props.titles}></AppTableHeader>
                <AppTableBody data={props.data} keys={props.keys}></AppTableBody>
            </table>
        </div>
    )
}