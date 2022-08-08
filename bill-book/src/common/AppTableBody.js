import {TableCell, TableRow, TableBody} from "@mui/material";

export const AppTableBody = (props) => {
    return (
        <TableBody>

            {props.data.map((row) => (
                <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.contact}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.created_at}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}
