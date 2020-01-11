import React, { Component } from 'react';
import logo from '../logo.svg';
import { faHome, faUser, faCog, faEye, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab)

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  onMouseEnterHandler(key) {
    this.setState({
      [key]: true
    });
  }

  onMouseLeaveHandler(key) {
    this.setState({
      [key]: false
    });
  }

  render() {
    return (
      <div className="home">
        <section className="info-section">
          <div className="logo">M</div>
          <div className="info-box-top">
            <a
              onMouseEnter={() => this.onMouseEnterHandler("home")}
              onMouseLeave={() => this.onMouseLeaveHandler("home")}
              className="home active"
              id="one"
              href="/"
            >
              { this.state.home
                  ? <span>Home</span>
                  : <FontAwesomeIcon icon={faHome} />
              }
            </a>
            <a
              onMouseEnter={() => this.onMouseEnterHandler("about")}
              onMouseLeave={() => this.onMouseLeaveHandler("about")}
              className="about active"
              id="two"
              href="/about"
            >
              { this.state.about
                  ? <span>About</span>
                  : <FontAwesomeIcon icon={faUser} />
              }
            </a>
            <a
              onMouseEnter={() => this.onMouseEnterHandler("skills")}
              onMouseLeave={() => this.onMouseLeaveHandler("skills")}
              className="skills active"
              id="three"
              href="/skills"
            >
              { this.state.skills
                  ? <span>Skills</span>
                  : <FontAwesomeIcon icon={faCog} />
              }
            </a>
            <a
              onMouseEnter={() => this.onMouseEnterHandler("gallery")}
              onMouseLeave={() => this.onMouseLeaveHandler("gallery")}
              className="gallery active"
              id="four"
              href="/gallery"
            >
              { this.state.gallery
                  ? <span>Gallery</span>
                  : <FontAwesomeIcon icon={faEye} />
              }
            </a>
            <a
              onMouseEnter={() => this.onMouseEnterHandler("contact")}
              onMouseLeave={() => this.onMouseLeaveHandler("contact")}
              className="contact active"
              id="five"
              href="/contact"
            >
              { this.state.contact
                  ? <span>Contact</span>
                  : <FontAwesomeIcon icon={faEnvelope} />
              }
            </a>
          </div>
          <div className="info-box-bottom">
            <ul className="contact-links">
              <li className="link">
                <a target="_blank" href="#"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
              </li>
              <li className="link">
                <a target="_blank" href="https://www.facebook.com/matthew.moncada.731"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
              </li>
              <li className="link">
                <a target="_blank" href="https://www.linkedin.com/in/matthew-moncada/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
              </li>
              <li className="link">
                <a target="_blank" href="https://github.com/AsiaArgento/"><FontAwesomeIcon icon={['fab', 'github']} /></a>
              </li>
            </ul>
          </div>
        </section>

        <section className="content-area">
          <div className="container">
            <div className="profile">
              <h1>Hi,<br /> I'm Matt,<br /> web developer.</h1>
              <h2>Front End Developer / WordPress Developer / Freelancer</h2>
              <a href="/contact" className="button">CONTACT ME</a>
            </div>
            <div className="user-img">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>
        </section>
      </div>


    );
  }
}
