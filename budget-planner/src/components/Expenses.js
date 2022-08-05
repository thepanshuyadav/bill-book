import Expense from "./Expense";

function Expenses({expenses, setExpense}) {
    const removeExpense = (id) => {
        setExpense(expenses.filter(exp => exp.id !== id))
    }
    return (
        <div>
            {expenses.map((exp, i) =>
                <Expense expense={exp} removeExpense={removeExpense} key={i}/>)
        }
        </div>)
}

export default Expenses