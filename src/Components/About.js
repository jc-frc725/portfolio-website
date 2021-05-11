import React, { Component } from 'react';

class About extends Component {
  render() {

    if (this.props.data) {
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
         <div>
            <div className="columns contact-details">
               <h2>Contact Details</h2>
               <ul>
                  <li key={"linkedin"}><a href={"https://www.linkedin.com/in/jchow1132/"}><i className={"fa fa-linkedin"}> </i> https://www.linkedin.com/in/jchow1132 </a></li>
                  <li key={"github"}><a href={"https://github.com/jc-frc725"}><i className={"fa fa-github"}></i> https://github.com/jc-frc725 </a></li>
                  <li key={"email"}><a href={"mailto:hrll71990@gmail.com"}><i className={"fa fa-envelope"}></i> hrll71990@gmail.com </a></li>
               </ul>
               <div>
                  <h2> Resume </h2>
                  <a href={resumeDownload} className="button"><i className="fa fa-download"></i> Download Resume</a>
               </div>
            </div>
            
         </div>
      </section>
    );
  }
}

export default About;
