const AppTableHeader = (props) => {
    return (
        <thead>
            <tr type={props.type}>
                {props.titles.map((title) => <th align="left" key={title}>{title}</th>)}
            </tr>
        </thead>
    )

}
export default AppTableHeader
