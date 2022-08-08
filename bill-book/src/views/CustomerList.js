import {Button, IconButton, Table} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {AppTable} from "../common/AppTable";
import {useState, useEffect, useContext} from "react";
import axios from "axios";
import {AppContext, AppProvider} from "../context/AppContext";


const CUSTOMER_TABLE_TITLES = ["Name", "Phone", "Email", "Created On"]
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

    return (
        <div>
            <div className="Customer-header">
                <h2>Customers</h2>
                <Button variant="contained" size="small" startIcon={<AddIcon/>}>
                    Add Customer
                </Button>
            </div>
            <div className="Table-container">
                <AppTable titles = {CUSTOMER_TABLE_TITLES} data={customers}/>
            </div>
        </div>
    )
}