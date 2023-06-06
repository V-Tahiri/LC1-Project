import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './layouts/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/paper-dashboard.scss?v=1.3.0";
import "./assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
  <App />
</React.StrictMode>
</BrowserRouter>,
  document.getElementById('root') as HTMLElement
 
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
