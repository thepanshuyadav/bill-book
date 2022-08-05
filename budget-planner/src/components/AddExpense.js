import {useState} from "react";

function AddExpense({expenses, setExpense}) {
    const [expenseTitle, setExpenseTitle] = useState("")
    const [expenseAmount, setExpenseAmount] = useState(0)

    const addExpense = (event) => {
        event.preventDefault()
        if(expenseTitle !== "" && expenseAmount > 0) {
            const expense = {title: expenseTitle, amount: expenseAmount, id: Date.now()}
            setExpense([...expenses, expense])
        }

    }

    return (
        <div className="addExpenseCard">
            <label className="labelName">Name</label>
            <input className="inputName" value={expenseTitle} onChange={(event) => setExpenseTitle(event.target.value)}/>
            <label className="labelCost">Cost</label>
            <input className="inputCost" type="number" min={0} value={expenseAmount} onChange={(event) => setExpenseAmount(+event.target.value)}/>
            <button className="addButton" onClick={addExpense}>Add</button>
        </div>)
}

export default AddExpense