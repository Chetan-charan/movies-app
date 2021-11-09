import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import CardList from './card';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <CardList />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
