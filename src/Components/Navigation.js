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
            <img className="profile-pic" src={profilepic} alt="Justin Chow Profile" />
        </div>
         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
	          <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>
    ) 
  }
}

export default Navigation;