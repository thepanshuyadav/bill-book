import React, {lazy, Suspense} from "react";
import {CustomerForm} from "./CustomerForm";
import {useSelector} from "react-redux";
import {modalSelector} from "../../store/store";

const CustomerList = lazy(() => import('./CustomerList'))

export const Customer = () => {
    const openModal = useSelector(modalSelector)

    return (
        <>
            {openModal && <div className="Modal-bg" data-testid="modal">
                <CustomerForm className="Modal"/>
            </div>}
            <Suspense fallback={<div>Loading...</div>}>
                <CustomerList/>
            </Suspense>
        </>
    )
}