import React, {lazy, Suspense} from "react";
import {ItemForm} from "./ItemForm";
import {useSelector} from "react-redux";
import {modalSelector} from "../../store/store";

const ItemList = lazy(() => import('./ItemList'))

export const Item = () => {
    const openModal = useSelector(modalSelector)
    return (
        <>
            {openModal && <div className="Modal-bg">
                <ItemForm className="Modal"/>
            </div>}
            <Suspense fallback={<div>Loading...</div>}>
                <ItemList/>
            </Suspense>

        </>
    )
}