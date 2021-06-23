import React from "react"
import { connect } from 'react-redux';

import * as contact_form_selectors from '../store/contact_form/reducers';
import * as contact_form_types from '../store/contact_form/action_types';
import * as contact_form_actions from '../store/contact_form/actions';

import ContactForm from '../components/ContactForm'


class ContactPage extends React.Component {
    constructor(props) {
        super(props)
        this.form = React.createRef()
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.props.dispatch(contact_form_actions.updateContactFormData({[name]: value}))
    }
    handleSubmit(event){
        event.preventDefault()
        this.props.dispatch(
            contact_form_actions._submitContactForm(this.props.form_data)
        )
    }
    render() {
        if (this.props.form_state === contact_form_types.FORM_RESET) this.form.current.reset()
        const is_submitting = this.props.form_state === contact_form_types.FORM_SUBMITTING ? true : false
        return (
            <div>
                <section className="page--section p-3 p-lg-5 d-flex flex-column">
                    <h2 className="mb-5">Contact</h2>
                    <div className="row">
                        <div className="col-4 col-lg-3 p-0 m-0 d-none d-md-block">
                            <div style={{
                                "height": "100%",
                                "backgroundImage": "url('/imgs/assets/me.jpg')",
                                "backgroundRepeat": "no-repeat",
                                "backgroundSize": "cover",
                                "backgroundPosition": "100% 0"
                            }
                            }>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-6 p-0 m-0">
                            <div className="card" style={{ "borderRadius": "0px .25em 0px .25em" }}>
                                <div className="card-header">
                                    Send me message.
                                </div>
                                <div className="card-block">
                                    <ContactForm 
                                        handleInputChange={this.handleInputChange.bind(this)} 
                                        handleSubmit={this.handleSubmit.bind(this)} 
                                        is_submitting={is_submitting} 
                                        form_ref={this.form}
                                        form_state ={this.props.form_state}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )

    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {    
    return {
        form_state: contact_form_selectors.getFormState(state),
        form_data: contact_form_selectors.getFormData(state)
    };
}
export default connect(mapStateToProps)(ContactPage);