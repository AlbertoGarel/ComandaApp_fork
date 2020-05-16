import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Redirect, BrowserRouter, Route, Switch} from 'react-router-dom'
import "./App.css"
import Header from './views/Header'

ReactDOM.render(
  <BrowserRouter>
  <Header/>
    <Switch>
      <Route path="/" exact component={App}/>
      // <Route path="/" component={App}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
