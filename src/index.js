import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';
import "react-datepicker/dist/react-datepicker.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
