import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './ad.css'

export default class Ad extends Component {

  render() {
    return (
      <div className="container">
          <div className="image">
              <img src={this.props.imageUrl} />
          </div>

          <div className="info">
              <h6>{this.props.title}</h6>
              <p>{this.props.description}</p>
          </div>
          <div className="contact">
              Would you like to Contact the seller? <br/>
              Please <a href={"/contact?ad_id=" + this.props.id + "&userId=" + this.props.userId}>Click here!</a>
          </div>
        </div>
    );
  }
}
