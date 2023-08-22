import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from './components/index/Index';

function App() {
  
  return (
    <div className="App">
      <Router>  
        <Switch>
          <Route exact path="/:id" component={Index} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
