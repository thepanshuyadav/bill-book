import '../../styles/Table.css';
import {DISPATCH_ACTIONS, INVOICE_SEARCH_FIELDS, INVOICE_TABLE_METADATA} from "../../utils/constants";
import {sanitizeInvoiceData} from "../../utils/data_utils";
import {ListView} from "../../common/listview/ListView";
import AddIcon from "@mui/icons-material/Add";
import {Link} from "react-router-dom";
import axios from "axios";
import {invoiceListSelector} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";

const entity = {
    name: "invoices",
    type: "invoice",
    url: "invoice",
    initialFilter: "customer",
    selector: invoiceListSelector,
    dispatchFetchAction: DISPATCH_ACTIONS.FETCH_INVOICES,
    sanitizeData: sanitizeInvoiceData,
    searchFields: INVOICE_SEARCH_FIELDS,
    table: {
        titles: INVOICE_TABLE_METADATA.TITLES,
        keys: INVOICE_TABLE_METADATA.COLUMN_KEYS
    }

}
const InvoiceList = () => {
    const dispatch = useDispatch()
    const invoices = useSelector(invoiceListSelector)
    const handleRowClick = (row) => {
            const status = (row.status === "unpaid" ? "paid" : "unpaid")
            axios.patch(   `http://127.0.0.1:8080/v1/invoice/?invoice_id=${row.id}&status=${status}`).then(res => {
                const new_invoice = sanitizeInvoiceData([res.data])[0]
                const new_invoices = invoices.map((invoice) => {
                    if(invoice.id === new_invoice.id) {
                        return {
                            ...invoice,
                            status : new_invoice.status
                        }
                    }
                    return invoice
                })
                console.log(new_invoices)
                // todo: update invoice list
                dispatch({
                    type: DISPATCH_ACTIONS.UPDATE_INVOICE,
                    payload: new_invoices
                })
            }).catch(err => {
                alert(err.response.data.error)
            })
    }
    return (
        <>
            <section className="Listview-header">
                <p className="List-heading">Invoices</p>
                <Link
                    className="Add-button"
                    to="/invoices/create">

                    <button>
                        {<AddIcon/>}
                        <p>Create Invoice</p>
                    </button>
                </Link>
            </section>
            <ListView entity={entity}
                      handleRowClick={handleRowClick}/>
        </>
    )
}

export default InvoiceList