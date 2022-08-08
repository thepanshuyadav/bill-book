import './App.css';
import {useState} from "react";
import Banner from "./components/Banner";
import Expenses from "./components/Expenses";
import AddExpense from "./components/AddExpense";
import {AppProvider} from './context/AppContext';

// TODO: Implement using reducer

function App() {

    const [expenses, setExpense] = useState([])

    return (
        <AppProvider>
            <div className="App">
                <h1>Budget Planner 💸</h1>
                <Banner expenses={expenses}/>
                <div>
                    <h2>Expenses</h2>
                    <Expenses expenses={expenses} setExpense={setExpense}/>
                </div>
                <div>
                    <h2>Add Expense</h2>
                    <AddExpense expenses={expenses} setExpense={setExpense}/>
                </div>
            </div>
        </AppProvider>
    );
}

export default App;
