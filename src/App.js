import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Covid from "./components/Covid";
import PrincipalDesk from "./components/principalDesk/index";
import Admissions from "./components/addmission/index";
import Career from "./components/career/index";
import Team from "./components/team/index";
import Contact from "./components/contact/index";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/covid" component={Covid} />
        <Route exact path="/about" component={About} />
        <Route exact path="/principal" component={PrincipalDesk} />
        <Route exact path="/admissions" component={Admissions} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
