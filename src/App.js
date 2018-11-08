import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Book from "./containers/Book";
import Agence from "./containers/Agence";
import Contact from "./containers/Contact";
import Campagne from "./containers/Campagne";
import InternationalMill from "./containers/Campagnes/International-mill";
import Patisen from "./containers/Campagnes/Patisen";
import Unesco from "./containers/Campagnes/Unesco";
import Silverenia from "./containers/Campagnes/Silverenia";
import Guyader from "./containers/Campagnes/Guyader";
import Edc from "./containers/Campagnes/Edc";
import Medicis from "./containers/Campagnes/Medicis";
import Erie from "./containers/Campagnes/Erie-europe";
import Guerlain from "./containers/Campagnes/Guerlain";
import Header from "./components/Header";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/book" component={Book} />
          <Route path="/agence" component={Agence} />
          <Route path="/contact" component={Contact} />
          <Route path="/campagne" component={Campagne} />
          <Route path="/international-mill" component={InternationalMill} />
          <Route path="/patisen" component={Patisen} />
          <Route path="/unesco" component={Unesco} />
          <Route path="/silverenia" component={Silverenia} />
          <Route path="/guyader" component={Guyader} />
          <Route path="/européene-du-condiment" component={Edc} />
          <Route path="/medicis" component={Medicis} />
          <Route path="/erie-europe" component={Erie} />
          <Route path="/guerlain" component={Guerlain} />
        </div>
      </Router>
    );
  }
}

export default App;
