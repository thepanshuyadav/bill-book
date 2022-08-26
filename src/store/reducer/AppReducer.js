import {DISPATCH_ACTIONS} from "../../utils/constants";

const appState = {
    openModal: false,
    pagination: {
        currentPage: 1,
        dataItemsPerPage: 10000
    }
}

export const AppReducer = (state = appState, action) => {
    switch (action.type) {

        case DISPATCH_ACTIONS.OPEN_MODAL:
            return {
                ...state,
                openModal: !state.openModal
            }
        case DISPATCH_ACTIONS.PAGINATION_RESET:
            return {
                ...state,
                pagination: {
                    currentPage: 1,
                    dataItemsPerPage: 10000
                }
            }
        case DISPATCH_ACTIONS.PAGINATION_MOVE_FORWARD: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: state.pagination.currentPage + 1,
                }
            }
        }
        case DISPATCH_ACTIONS.PAGINATION_MOVE_BACKWARD: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: state.pagination.currentPage - 1,
                }
            }
        }
        case DISPATCH_ACTIONS.PAGINATION_SET_STEP: {
            return {
                ...state,
                pagination: {
                    currentPage: 1,
                    dataItemsPerPage: action.payload
                }
            }
        }
        default:
            return state
    }
}