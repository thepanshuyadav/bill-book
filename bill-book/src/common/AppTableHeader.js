import {TableRow, TableCell, TableHead} from "@mui/material";

export const AppTableHeader = (props) => {
    return (
        <TableHead>
            <TableRow>
                {props.titles.map((title) => <TableCell align="left" key={title}>{title}</TableCell>)}
            </TableRow>
        </TableHead>
    )

}
