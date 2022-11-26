import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              portfolioData.socialLinks && portfolioData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
      </div>
    </footer>
    );
  }
}