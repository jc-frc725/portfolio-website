import React, { Component } from 'react';

class Footer extends Component {
  render() {

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">

           <ul className="copyright">
              <li>&copy; Copyright 2017 Tim Baker</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
           </ul>

        </div>
     </div>
  </footer>
    );
  }
}

export default Footer;
