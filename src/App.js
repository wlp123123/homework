import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
import Foots from "./pages/Foods"
import {Switch,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/foods" component={Foots} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
