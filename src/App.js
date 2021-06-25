import React from "react";
import { Route } from "react-router-dom";
import Covid from "./components/Covid";

function App() {
  return (
    <div>
      <Route exact path="/covid" component={Covid} />
    </div>
  );
}

export default App;
