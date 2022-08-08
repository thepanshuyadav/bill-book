import {useContext} from "react";
import {AppContext} from "../context/AppContext"

function Banner() {
    const {budget, expenses} = useContext(AppContext) 
    const spent = expenses.reduce((acc, expense) => acc + expense.amount, 0)
    return (
        <div className="App-header">
            <div className="budgetCard">
                <p>Total Budget : {budget}</p>
            </div>
            <div className="remainingCard">
                <p>Remaining : {budget - spent}</p>
            </div>
            <div className="spentCard">
                <p>Spent : {spent}</p>
            </div>
        </div>
    )
}

export default Banner