function Expense({expense, removeExpense}) {
    // console.log(expense)
    return (
        <div key={expense.id} className="expense">
            <p className="expenseTitle">{expense.title}</p>
            <p  className="expenseAmount">${expense.amount}</p>
            <button className="deleteButton" onClick={() => removeExpense(expense.id)}>❌</button>
        </div>
    )
}

export default Expense