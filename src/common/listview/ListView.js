import {useEffect, useState} from "react";
import AppTable from "../table/AppTable";
import {SearchComponent} from "./SearchComponent";
import {useDispatch, useSelector} from "react-redux";
import {DISPATCH_ACTIONS} from "../../utils/constants";
import axios from "axios";

export const ListView = ({entity, handleRowClick}) => {
    const unfilteredData = useSelector(entity.selector)
    const dispatch = useDispatch()

    const [filteredData, setFilteredData] = useState(unfilteredData || []);
    const [filterSelect, setFilterSelect] = useState(entity.initialFilter);
    const [filterInput, setFilterInput] = useState("");

    useEffect(() => {
        // TODO: set loading animation
        axios.get(`http://127.0.0.1:8080/v1/${entity.url}/all`).then(res => {
            const data = entity.sanitizeData(res.data)
            // console.log(data)

            dispatch({
                type: entity.dispatchFetchAction,
                payload: data
            })
        }).catch(err => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        setFilteredData(unfilteredData);
    }, [unfilteredData, filterSelect])

    useEffect(() => {
        dispatch({
            type: DISPATCH_ACTIONS.PAGINATION_RESET
        })
        searchKeyword()
    }, [filterInput])


    const searchKeyword = () => {
        const results = unfilteredData.filter((filteredData) =>
            filteredData[filterSelect].toLowerCase().includes(filterInput.toLowerCase())
        );
        setFilteredData(results);
    };

    return (
        <div>
            <SearchComponent
                search={entity.searchFields}
                setFilterInput={setFilterInput}
                setFilterField={setFilterSelect}>
            </SearchComponent>
            <div className="Table-container">

                <AppTable
                    titles={entity.table.titles}
                    keys={entity.table.keys}
                    data={filteredData}
                    type={entity.type}
                    handleRowClick={handleRowClick}
                />

            </div>
        </div>
    )
}