import React, {Component} from 'react';
import Navigation from '../core/Navigation/Navigation'

import './contactForm.css'

export default class contactForm extends Component {

    constructor() {
        super();
        let search = window.location.search;
        let params = new URLSearchParams(search);

        let userId = params.get('userId');
        let adId = params.get('ad_id');
        let user;

        let self = this;

        fetch('/users/' + userId + '/get')
            .then(function (response) {
                response.json().then(function (res) {
                    self.setState({userId : userId, ad_id : adId, userName : res.name, message : '', phoneNumber : '', errorMessage: ''});
                })
            });

    }

    updateMessage(e) {
        if(!e) {
            return;
        }
        console.log("updateMessage called");
        this.state.message = e.target.value;
    }

    updatePhoneNumber(e) {
        if(!e) {
            return;
        }
        console.log("updatePhoneNumber called");
        this.state.phoneNumber = e.target.value;
    }

    async handleThis(e) {

        let self = this;

        console.log("called!");

        let sendMessageDTO = {
            sellerName: this.state.userName,
            adId: this.state.ad_id,
            sellerId: this.state.userId,
            message: this.state.message,
            phoneNumber: this.state.phoneNumber
        };

        const response = await fetch('/send-message', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(sendMessageDTO),
        }).then(function (success) {
            console.log(success.status)
            if(success.status == 200) {
                console.log(window)
                window.location.href = '/message-sent';
            } else {
                self.state.errorMessage = "error";
                self.forceUpdate();
            }
        })
    }


    render() {
        if(!this.state) {
            return <div></div>;
        }
      return <div>
          <Navigation/>
          <div className="component-contact-form">
              <h4>Send a Message to the seller!</h4>
              <div className="parent">
                  <div className="userInfo disabled">
                      <input type="text" disabled value={this.state.userName}/>
                  </div>
                  <div className="phone-number-field">
                      <input type="text" placeholder="Phone Number" onChange={this.updatePhoneNumber.bind(this)}/>
                  </div>
                  <div className='detailed-message-field'>
                      <textarea className="detailed-message" placeholder="Detailed Message - Show the best of yourself :)" onChange={this.updateMessage.bind(this)}/>
                  </div>
                  <div className="error-message">{this.state.errorMessage}</div>
                  <button onClick={this.handleThis.bind(this)}>Submit</button>
              </div>
          </div>
      </div>;
    }
  }
