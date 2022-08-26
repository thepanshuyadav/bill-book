import './App.css';
import {NavBar} from "./common/navigation/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "./views/dashboard/Dashboard";
import {Customer} from "./views/customer/Customer";
import {Item} from "./views/item/Item";
import {Invoice} from "./views/invoice/Invoice";
import {CreateInvoice} from "./views/invoice/CreateInvoice";


function App() {
    return (
        <BrowserRouter>
            <>
                <header>
                    <h1>Bill Book</h1>
                </header>
                <div className="App">
                    <nav>
                        <NavBar/>
                    </nav>
                    <main>
                        <Routes>

                            <Route path="/" element={<Dashboard/>}/>
                            <Route path="/customers"
                                   element={<Customer/>}/>
                            <Route path="/items" element={<Item/>}/>
                            <Route path="/invoices" element={<Invoice/>}/>
                            <Route path="/invoices/create" element={<CreateInvoice/>}/>
                        </Routes>
                    </main>
                </div>
            </>
        </BrowserRouter>
    );
}

export default App;
