import  {AppTable} from "../common/table/AppTable";
import {useEffect, useContext} from "react";
import axios from "axios";
import {AppContext} from "../context/AppContext";
import {ListViewHeader} from "../common/ListViewHeader";
import AddIcon from "@mui/icons-material/Add";
import '../styles/Table.css'


const CUSTOMER_TABLE_TITLES = ["Name", "Phone", "Email", "Created On"]
const KEYS = ["name", "contact", "email", "created_at"]
export const CustomerList = () => {
    const {customers, dispatch} = useContext(AppContext)
    // const [customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get('customer.json').then(res => {
            console.log(res)
            dispatch({
                type: 'ADD_CUSTOMER',
                payload: res.data
            })
            // setCustomers(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    function toggleVisibility() {
        dispatch({
            type: 'OPEN_MODAL'
        })
    }

    return (

        <div>
            <ListViewHeader
                title="Customers"
                toggleFunction = {toggleVisibility}
                buttonText="Add Customers"
                icon={<AddIcon fontSize="small"/>}/>
            <div className="Table-container">
                <AppTable titles={CUSTOMER_TABLE_TITLES} keys={KEYS} data={customers}/>
            </div>
        </div>
    )
}