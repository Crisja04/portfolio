import React from "react";
// Components
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";
// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
// Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigationbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
