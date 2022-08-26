const AppTableBody = (props) => {
    const convertDate = (unixTime) => {
        const date = new Date(unixTime * 1000)
        return date.toUTCString()
    }
    const findClassName = (key, value) => {
        if (key === "status" && value === "unpaid") {
            return "status-unpaid"
        } else if (key === "status" && value === "paid") {
            return "status-paid"
        } else {
            return key
        }
    }
    return (
        <tbody>
        {props.data.map((row) => (
            <tr data-testid="data-row" key={row.id} type={props.type} onClick={() => props.handleRowClick(row)}>
                {props.keys.map((cell_key) =>

                    <td align="left" key={cell_key}>
                        <p className={findClassName(cell_key, row[cell_key])}>
                            {cell_key === "created_at" || cell_key === "issued_at" ? convertDate(row[cell_key]) : row[cell_key]}
                        </p>

                    </td>
                )}
            </tr>
        ))}
        </tbody>
    )
}
export default AppTableBody
