import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactState from "./context/contact/ContactState";
import NavbarContact from "./components/layout/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import Alert from "./components/layout/Alert";

import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <NavbarContact />

            <div className='container'>
              <Alert />
              <Switch>
                <PrivateRoute path='/' exact>
                  <Home />
                </PrivateRoute>
                {/* <Route path='/' exact component={Home} /> */}
                <Route path='/about' exact component={About} />
                <Route path='/login' exact component={Login} />
                <Route path='/signup' exact component={Signup} />
              </Switch>
            </div>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
