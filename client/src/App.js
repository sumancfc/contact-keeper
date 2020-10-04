import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactState from "./context/contact/ContactState";
import NavbarContact from "./components/layout/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";

function App() {
  return (
    <ContactState>
      <Router>
        <NavbarContact />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={Signup} />
        </Switch>
      </Router>
    </ContactState>
  );
}

export default App;
