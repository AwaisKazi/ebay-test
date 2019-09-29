import React, {Component} from 'react';
import './contactFormConfirmation.css'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as contactFormConfirmationActions from "../../store/contactFormConfirmation/actions";
export default class contactFormConfirmation extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-contact-form-confirmation">

          Your message was successfully sent! Click <a href="/"> Here </a> to explore more ads!
      </div>;
    }
  }
// export default connect(
//     ({ contactFormConfirmation }) => ({ ...contactFormConfirmation }),
//     dispatch => bindActionCreators({ ...contactFormConfirmationActions }, dispatch)
//   )( contactFormConfirmation );