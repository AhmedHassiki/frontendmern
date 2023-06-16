import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {store } from './JS Redux/store/store'
import {BrowserRouter} from "react-router-dom"
// import { disableReactDevTools } from '@fvilers/disable-react-devtools'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
);