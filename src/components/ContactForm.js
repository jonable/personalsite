import React from "react"

import ContactSubmitButton from '../components/ContactSubmitButton'

export default class ContactForm extends React.Component{
    render(){        
        return(
            <div>
                <form ref={this.props.form_ref} onSubmit={this.props.handleSubmit} >
                    <div className="form-group col">
                        <label className="form-control-label">Name</label>
                        <input type="text" className="form-control" disabled={this.props.is_submitting} name="name" onChange={this.props.handleInputChange} required={true} />
                    </div>
                    <div className="form-group col">
                        <label className="form-control-label">Email</label>
                        <input type="email" className="form-control" disabled={this.props.is_submitting} name="email" onChange={this.props.handleInputChange} required={true} />
                    </div>
                    <div className="form-group col">
                        <label className="form-control-label">Phone Number</label>
                        <input type="tel" className="form-control" disabled={this.props.is_submitting} name="phone_number" onChange={this.props.handleInputChange} />
                    </div>
                    <div className="form-group col">
                        <label className="form-control-label">Reason</label>
                        <select size="0" className="form-control" disabled={this.props.is_submitting} name="reason" onChange={this.props.handleInputChange} >
                            <option>General</option>
                        </select>
                    </div>
                    <div className="form-group col">
                        <label className="form-control-label">Notes</label>
                        <textarea className="form-control" disabled={this.props.is_submitting} id="form-group-input" name="notes" rows="6" onChange={this.props.handleInputChange} ></textarea>
                    </div>
                    <div className="form-group col">
                        <ContactSubmitButton {...this.props} {...this.state} />
                    </div>
                </form>
            </div>            
        )
    }
}