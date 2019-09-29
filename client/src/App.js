import React, { Component } from 'react';
import Navigation from '../src/components/core/Navigation/Navigation'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import detail from "../src/pages/detail/detail";
import list from "../src/pages/list/list";
import contactForm from "../src/components/contactForm/contactForm"
import contactFormConfirmation from "./components/contactFormConfirmation/contactFormConfirmation";

class App extends Component {

  render() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={list}/>
                    <Route path="/ad-list" component={list}/>
                    <Route path="/detail" component={detail}/>
                    <Route path="/contact" component={contactForm}/>
                    <Route path="/message-sent" component={contactFormConfirmation}/>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
