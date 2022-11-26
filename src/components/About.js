import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 portfolioData.aboutme
               }
               </p>
               
            </div>
         </div>
      </section>
    );
  }
}