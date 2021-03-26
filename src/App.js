import React from "react";
import { Route, Switch} from "react-router-dom";
import './App.css';

import container from './Components/Container.jsx'

function App() {

  return (
    <Switch>
    <Route exact path="/" component={container} />
    </Switch>
  );
}

export default App;
