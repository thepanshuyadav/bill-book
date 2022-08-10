export const AppTableBody = (props) => {
    const convertDate = (unixTime) => {
        const date = new Date(unixTime * 1000)
        return date.toLocaleString()
    }
    return (
        <tbody>
            {props.data.map((row) => (
                <tr key={row.name}>
                    {props.keys.map((cell_key) =>

                        <td align="left" key={cell_key}>
                            { cell_key === "created_at" ? convertDate(row[cell_key]) : row[cell_key]}
                        </td>

                    )}
                </tr>
            ))}
        </tbody>
    )
}
