import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="navigation">
          <a className="logo">
            Logo
          </a>
          <nav className="nav-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/skills">Skills</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact</a>
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
