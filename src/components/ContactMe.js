import React, { Component } from 'react';

export default class ContactMe extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Get in touch!
              </p>
              <p >
              Email: hannamarcus1@gmail.com
              <div>
              </div>
              Phone:(510) 332-1349
              </p>
            </div>
          </div>
          <div className="row">
          </div>
        </section>
        );
  }
}