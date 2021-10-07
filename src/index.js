import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container/Container'
import {Provider} from 'react-redux';
import {store} from './store/store';
import 'bootstrap/dist/css/bootstrap.css';
import './Style/main.css'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Container/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

