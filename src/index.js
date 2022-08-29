import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./store/store";
import {mswWorker} from './mocks/worker';
if (process.env.USE_MSW_MOCK_API === 'yes') {
    mswWorker.start();
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);
