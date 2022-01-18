import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import './App.css';
import Menus from './pages/menu/Menus';

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <div className="App">
      <Menus />
    </div>
  </Provider>,
  rootElement
)
