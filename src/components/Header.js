import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <ul id="nav" className="nav">
               <li className="current"><a href="#home">Home</a></li>
               <li><a href="#about">About Me</a></li>
             <li><a href="#resume">Resume</a></li>
               <li><a href="#portfolio">Projects</a></li>
               <li><a href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
              <h3 style={{color:'#fff', fontFamily:'sans-serif ', fontSize: 30 }}>My name is</h3>
               <h1 className="responsive-headline">Hanna Marcus</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif ', fontSize: 20 }}>I am a Junior Full-Stack Developer. 
               {portfolioData.roleDescription}
               </h3>
               <ul className="social">
                  {
                    portfolioData.socialLinks && portfolioData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

      </header>
      </React.Fragment>
    );
  }
}