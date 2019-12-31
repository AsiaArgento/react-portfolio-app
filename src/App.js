import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from './logo.svg';
import About from "./components/about.component";
import Contact from "./components/contact.component";
import Gallery from "./components/gallery.component";
import Home from "./components/home.component";
import Skills from "./components/skills.component";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    )
  }
}
