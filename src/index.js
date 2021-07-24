import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import provider method - to provide store data to all the component
import { Provider } from 'react-redux'
// import the store as well
import { store } from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    {/* wrap the app component with provider & store, 
    so that it is shared with all the other component */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
