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

    this.state = {
      isHover: false
    };

    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  onMouseEnterHandler() {
    this.setState({
      isHover: true
    });
  }

  onMouseLeaveHandler() {
    this.setState({
      isHover: false
    });
  }

  render() {
    return (
      <div className="home">
      <div className="hamburger-icon"></div>
        <section className="info-section">
          <div className="logo">M</div>
          <div className="info-box-top">
            <a onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler} className="home active" id="one" href="/">
              { this.state.isHover
                  ? <span>Home</span>
                  : <FontAwesomeIcon icon={faHome} />
              }
            </a>
            <a id="two" href="/about"><FontAwesomeIcon icon={faUser} /></a>
            <a id="three" href="/skills"><FontAwesomeIcon icon={faCog} /></a>
            <a id="four" href="/gallery"><FontAwesomeIcon icon={faEye} /></a>
            <a id="five" href="/contact"><FontAwesomeIcon icon={faEnvelope} /></a>
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
