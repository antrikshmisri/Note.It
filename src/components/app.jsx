import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "../routes/Landing";
import Home from "../routes/Home";
import initFontAwesome from "./FaLibrary";
import { AuthProvider } from "../contexts/AuthContext";

initFontAwesome();

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
