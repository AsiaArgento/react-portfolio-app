import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="navigation">
          <a className="logo">
            Logo
          </a>
          <nav className="nav-links">
            <a className="home-link active"></a>
            <a className="about"></a>
            <a className="skills"></a>
            <a className="gallery"></a>
            <a className="contact"></a>
          </nav>
          <ul className="contact-links">
            <li className="link"></li>
            <li className="link"></li>
            <li className="link"></li>
            <li className="link"></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
