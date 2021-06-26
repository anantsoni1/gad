import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Covid from "./components/Covid";
import PrincipalDesk from "./components/principalDesk/index";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/covid" component={Covid} />
      <Route exact path="/about" component={About} />
      <Route exact path="/principal" component={PrincipalDesk} />
    </div>
  );
}

export default App;
