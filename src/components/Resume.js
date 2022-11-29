import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                portfolioData.education && portfolioData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.UniversityAbout}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
      

         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
               <a href='/.images/resume' download>Click here to download full resume</a>            
               </div>

            <div className="nine columns main-col">

               <div className="row">
        <div className="twelve columns collapsed">
          <div id="skills-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            portfolioData.skills && portfolioData.skills.map((item)=>{
              return(
                <div className="columns skills-item">
                  <div className="item-wrap">
                    <a href="#skills">
                      <img src={`${item.skillimgurl}`} className="item-img"/>
                      <div>
                        <div className="skills-item-meta">
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>

   			</div>

         </div>

      </section>
    );
  }
}