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
import AdminAdmission from "./components/Admin/admission";
import AdminContact from "./components/Admin/contact";
import AdminMedical from "./components/Admin/medical";
import AdminCareer from "./components/Admin/career";
import AdminAbout from "./components/Admin/about";
import AdminTeam from "./components/Admin/team";
import AdminPrincipal from "./components/Admin/principal";
import AdminParents from "./components/Admin/parents";
import AdminBlogs from "./components/Admin/Blogs/index";

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
        <Route exact path="/admin/admission" component={AdminAdmission} />
        <Route exact path="/admin/contact" component={AdminContact} />
        <Route exact path="/admin/medical" component={AdminMedical} />
        <Route exact path="/admin/career" component={AdminCareer} />
        <Route exact path="/admin/about" component={AdminAbout} />
        <Route exact path="/admin/team" component={AdminTeam} />
        <Route exact path="/admin/principal" component={AdminPrincipal} />
        <Route exact path="/admin/parents" component={AdminParents} />
        <Route exact path="/admin/blogs" component={AdminBlogs} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
