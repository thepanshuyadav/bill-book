import './App.css';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import StarIcon from '@mui/icons-material/Star';
import {CustomerList} from "./views/CustomerList";
import {AppContext} from "./context/AppContext";
import {useContext} from "react";
import {CustomerForm} from "./views/CustomerForm";

const navBarData = [
    {title: 'Customers', icon: <PersonIcon/>},
    {title: 'Items', icon: <StarIcon/>},
    {title: 'Invoices', icon: <DescriptionIcon/>}
]
function App() {
    const {openModal} = useContext(AppContext)
  return (

          <div>
              <div className="App-bar">
                  <h1>Bill Book</h1>
              </div>
              <div className="App">
                  <div className="App-nav">
                      {navBarData.map((navBarItem) => (
                          <button className="Nav-button" key={navBarItem.title}>{navBarItem.icon}<p>{navBarItem.title}</p></button>
                      ))}
                  </div>
                  <div className="App-main">
                      <div>
                          {openModal && <div className="Modal-bg"><CustomerForm className="Modal"/> </div> }
                          <CustomerList/>
                      </div>

                  </div>
              </div>
          </div>
  );
}

export default App;
