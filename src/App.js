import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Building from "./components/Building/Building";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/game" component={Building} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
