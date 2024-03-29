import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import store from './app/store';
import { setCurrentUser } from './app/userSlice';

if (localStorage.getItem('token')) {
  store.dispatch(setCurrentUser(jwtDecode(localStorage.getItem('token'))));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
