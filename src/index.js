import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from 'react-dom';
import App from './App';
import store from './app/store'
import { Provider } from 'react-redux';
import 'antd/dist/antd.css'

render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

