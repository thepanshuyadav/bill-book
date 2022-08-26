import AppTableHeader from "./AppTableHeader";
import AppTableBody from "./AppTableBody";
import {AppTableFooter} from "./AppTableFooter";
import {paginationSelector} from "../../store/store";
import {useSelector} from "react-redux";

const AppTable = (props) => {
    const pagination = useSelector(paginationSelector)
    const indexOfLastDataItem = pagination.currentPage * pagination.dataItemsPerPage
    const indexOfFirstDataItem = indexOfLastDataItem - pagination.dataItemsPerPage
    const data = props.data.slice(indexOfFirstDataItem, indexOfLastDataItem)
    return (
        <>
            {
                (props.data.length === 0) ? <h2>No data</h2> :
                    <>
                        <table data-testid="table">
                            <AppTableHeader titles={props.titles} type={props.type}></AppTableHeader>
                            <AppTableBody
                                data={data}
                                keys={props.keys}
                                type={props.type}
                                handleRowClick={props.handleRowClick}/>
                        </table>

                        <AppTableFooter
                            totalData={props.data.length}/>
                    </>
            }

        </>
    )
}
export default AppTable