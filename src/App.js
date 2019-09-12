import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./component/Navbar";
import { Alert } from "./component/Alert";
import { AlertContext } from "./context/alert/Alert-Context";

function App() {
  return (
    <AlertContext>
      <Router>
        <Navbar />
        <div className="container pt-4">
          <Alert />
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/about"} component={About} />
          </Switch>
        </div>
      </Router>
    </AlertContext>
  );
}

export default App;
