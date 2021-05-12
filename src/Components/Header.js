import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
    }

    return (
      <header id="home">

      <div className="header row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3 className="header-description">
              Hello and welcome!
              <br></br> 
              I'm a {city}-based {occupation} with experience in JavaScript, Node.js, React, SQL, and more. 
              <br></br>
              {description}
            </h3>
            <hr />
            <ul className="social">
            </ul>
         </div>
      </div>

   </header>
    );
  }
}

export default Header;
