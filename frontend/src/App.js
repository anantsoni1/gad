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
import NavbarComponent from "./components/navbar";
import Dashboard from "./components/Admin/dashboard/index";
import Parents from "./components/parents/index";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/covid" component={Covid} />
        <Route exact path="/parents" component={Parents} />
        <Route exact path="/about" component={About} />
        <Route exact path="/principal" component={PrincipalDesk} />
        <Route exact path="/admissions" component={Admissions} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/admin/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
