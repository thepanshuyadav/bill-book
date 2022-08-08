import { useContext } from 'react'
import {AppContext} from '../context/AppContext'

function Expense(props) {
    // why printed two times?
    // console.log(expense)

    const {dispatch} = useContext(AppContext)
     const deleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        })
     }
    return (
        <div key={props.id} className="expense">
            <p className="expenseTitle">{props.title}</p>
            <p  className="expenseAmount">${props.amount}</p>
            <button className="deleteButton" onClick={deleteExpense}>❌</button>
        </div>
    )
}

export default Expense