import React, { Component } from 'react';

class About extends Component {
  render() {

    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      /*var networks= this.props.data.social.map(function(network){
         let link = <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         if (network.url === "hrll71990@gmail.com") {
            link = <li key={network.name}><a href={"mailto:hrll71990@gmail.com"}><i className={network.className}></i></a></li>
         }
         return link;
      })*/
    }

    return (
      <section id="about">
      <div className="row">
         <div className="nine columns main-col">
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <ul className="address">
                     <li key={"linkedin"}><a href={"https://www.linkedin.com/in/jchow1132/"}><i className={"fa fa-linkedin"}> </i> https://www.linkedin.com/in/jchow1132 </a></li>
                     <li key={"github"}><a href={"https://github.com/jc-frc725"}><i className={"fa fa-github"}> </i> https://github.com/jc-frc725 </a></li>
                     <li key={"email"}><a href={"mailto:hrll71990@gmail.com"}><i className={"fa fa-envelope"}> </i> hrll71990@gmail.com </a></li>
						   <span>{phone}</span><br />

					   </ul>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
