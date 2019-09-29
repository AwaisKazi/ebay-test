import React, {Component} from 'react';
import logo from '../../../ebay-logo.png'
import './Navigation.css'

export default class Navigation extends Component {
    render() {
        return (
          <nav>
              <img className="logo" src={logo}/>
              <ul>Display Ads</ul>
          </nav>
        );
    }
  }