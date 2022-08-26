import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {useDispatch, useSelector} from "react-redux";
import {DISPATCH_ACTIONS} from "../../utils/constants";
import {paginationSelector} from "../../store/store";

export const AppTableFooter = (props) => {
    const dispatch = useDispatch()
    const pagination = useSelector(paginationSelector)
    const moveForwardPagination = () => {
        if(pagination.currentPage < props.totalData/pagination.dataItemsPerPage)
            dispatch({
                type: DISPATCH_ACTIONS.PAGINATION_MOVE_FORWARD
            })
    }
    const moveBackwardPagination = () => {
        if(pagination.currentPage>1) {
            dispatch({
                type: DISPATCH_ACTIONS.PAGINATION_MOVE_BACKWARD
            })
        }
    }
    return (
        <div className="Table-footer">
            <ArrowBackIosIcon className="Icon-pagination" onClick={moveBackwardPagination}/>
            <select data-testid="pagination-count-selector" className="Select-pagination" onChange={(event) => {
                dispatch({
                    type: DISPATCH_ACTIONS.PAGINATION_SET_STEP,
                    payload: event.target.value
                })
                console.log(event.target.value)
            }
            }>
                <option value="10000">All</option>
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="50">50</option>
                <option value="100">100</option>

            </select>
            <ArrowForwardIosIcon className="Icon-pagination" onClick={moveForwardPagination}/>
        </div>
    )
}