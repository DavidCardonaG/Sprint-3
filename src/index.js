import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container/Container'
import {Provider} from 'react-redux';
import {store} from './store/store';
import './Style/main.css'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Container/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

