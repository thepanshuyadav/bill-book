import Expense from "./Expense";
import { useState, useEffect, useContext} from 'react'
import { AppContext } from "../context/AppContext";

function Expenses() {
    const {expenses} = useContext(AppContext)

    const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses])

    const searchKeyword = (event) => {
        const results = expenses.filter((filteredExpense) => 
            filteredExpense.title.toLowerCase().includes(event.target.value.toLowerCase())			
		);
		setfilteredExpenses(results);
	};
    return (
        <div className="expenses">
            <input
				type='text'
				placeholder='Search'
                className="inputSearch"
				onChange={searchKeyword}
			/>
            <div>
                {filteredExpenses.map((exp, i) =>
                <Expense id={exp.id} amount={exp.amount} title={exp.title} key={i}/>)
                }
            </div>
        </div>
        )
}

export default Expenses