import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      /*var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })*/
    }

    return (
      <header id="home">

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3 className="header-description">I'm a {city} based <span>{occupation}</span>. {description}.</h3>
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
