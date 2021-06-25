import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Covid from "./components/Covid";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/covid" component={Covid} />
      <Route exact path="/about" component={About} />
    </div>
  );
}

export default App;
