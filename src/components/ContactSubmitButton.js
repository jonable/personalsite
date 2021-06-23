import React from 'react';

import * as contact_form_types from '../store/contact_form/action_types';

export default class ContactSubmitButton extends React.Component {
    
    render() {
        // console.log("ContactButton", this.props)
        switch (this.props.form_state) {
            case contact_form_types.FORM_SUBMITTING:
                return (
                    <button type="submit" className="btn btn-light btn-block" disabled={true}>
                        <i className='fa fa-spinner fa-spin'></i>  Submitting</button>
                )
            case contact_form_types.FORM_SUCCESS:
                return (
                    <button type="submit" className="btn btn-success btn-block">Your Message Successfully Sent!</button>
                )
            case contact_form_types.FORM_HAS_ERRORS:
                return (
                    <button type="submit" className="btn btn-danger btn-block">There was an error sending your message :-/ </button>
                )
            default:
                return (
                    <button type="submit" className="btn btn-light btn-block">Submit</button>
                )
        }
    }
}