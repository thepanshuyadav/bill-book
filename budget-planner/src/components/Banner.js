import {useEffect, useState} from "react";

const TOTAL_BUDGET = 1000
function Banner({expenses}) {
    const [spent, setSpent] = useState(0)
    useEffect(()=> {
        let val = expenses.reduce((acc, expense) => acc + expense.amount, 0)
        setSpent(val)

    }, [expenses])
    return (
        <div className="App-header">
            <div className="budgetCard">
                <p>Total Budget : {TOTAL_BUDGET}</p>
            </div>
            <div className="remainingCard">
                <p>Remaining : {TOTAL_BUDGET - spent}</p>
            </div>
            <div className="spentCard">
                <p>Spent : {spent}</p>
            </div>
        </div>
    )
}

export default Banner