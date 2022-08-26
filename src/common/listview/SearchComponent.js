import '../../styles/Search.css'

export const SearchComponent = (props) => {
    return (
        <section className="Search-component">
            <input placeholder="Search" className="Input-search-field" onChange={(event) => props.setFilterInput(event.target.value)}/>
            <select data-testid="search-field-selector" className="Select-field" onChange={(event) => props.setFilterField(event.target.value)}>
                {props.search.map((searchField) =>
                    <option value={searchField.KEY} key={searchField.KEY}>{searchField.TITLE}</option>
                )}
            </select>
        </section>
    )
}