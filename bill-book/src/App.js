import './App.css';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {CustomerList} from "./views/CustomerList";
import {AppProvider} from "./context/AppContext";

function App() {
  return (
      <AppProvider>
          <div>
              <AppBar position="sticky" className="App-bar">
                  <Typography variant="h4">Bill Book</Typography>
              </AppBar>
              <div className="App">
                  <div className="App-nav"></div>
                  <div className="App-main">
                      <CustomerList/>
                  </div>
              </div>
          </div>
      </AppProvider>
  );
}

export default App;
