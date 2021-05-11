import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    if (this.props.data) {
      var profilepic = `images/${this.props.data.image}`;
    }
    return (
      <nav id="nav-wrap">

        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
        <div id="profile-container">
            <img className="profile-pic nav" src={profilepic} alt="Justin Chow Profile" />
        </div>
         <ul id="nav" className="nav">
            <hr className="nav-divider"></hr>
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <hr className="nav-divider"></hr>
              <li><a className="smoothscroll" href="#about">Contact</a></li>
            <hr className="nav-divider"></hr>
              <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            <hr className="nav-divider"></hr>
	            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <hr className="nav-divider"></hr>
         </ul>
      </nav>
    ) 
  }
}

export default Navigation;