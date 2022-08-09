export const AppTableBody = (props) => {
    return (
        <tbody>
            {props.data.map((row) => (
                <tr key={row.name}>
                    {props.keys.map((cell_key) =>
                        <td align="left" key={cell_key}>{row[cell_key]}</td>
                    )}
                </tr>
            ))}
        </tbody>
    )
}
