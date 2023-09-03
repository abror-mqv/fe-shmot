import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from './components/index/Index';
import Product from './components/product/Index';

function App() {
  
  return (
    <div className="App">
      <Router>  
        <Switch>
          <Route exact path="/:id" component={Index} />
          <Route exact path="/product/:id" component={Product}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
