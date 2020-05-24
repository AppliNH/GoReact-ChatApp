import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Connexion from './component/Connexion';
import NotFound from './component/NotFound';


const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Connexion}></Route>
      <Route path="/room/:room/username/:username" component={App}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
