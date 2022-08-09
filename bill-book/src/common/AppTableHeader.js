export const AppTableHeader = (props) => {
    return (
        <thead>
            <tr>
                {props.titles.map((title) => <th align="left" key={title}>{title}</th>)}
            </tr>
        </thead>
    )

}
