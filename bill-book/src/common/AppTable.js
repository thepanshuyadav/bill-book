import {Table, TableContainer} from "@mui/material";
import {AppTableHeader} from "./AppTableHeader";
import {AppTableBody} from "./AppTableBody";

export const AppTable = (props) => {
    return (
        <TableContainer>
            <Table aria-label="simple table">
                <AppTableHeader titles={props.titles}></AppTableHeader>
                <AppTableBody data={props.data}></AppTableBody>
            </Table>
        </TableContainer>
    )
}