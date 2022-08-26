import {lazy, Suspense} from "react";

const InvoiceList = lazy(() => import("./InvoiceList"));

export const Invoice = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <InvoiceList/>
            </Suspense>

        </>
    )
}