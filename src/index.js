import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer'
import './style.css'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <provider store={createStore(reducer)}>
    <App />
  </provider>
);
