import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

const ContactForm = ({ handleSubmit, pristine, submitting, noUser }) => {
  return (
    <form className="chat-box" onSubmit={handleSubmit}>
      	<Field name="additionalInfomation" component="textArea" disabled={noUser}/>
        <button type="submit" className="btn btn-primary" disabled={submitting || pristine || noUser}>Send Message</button>
      </form>
  )
}

export default reduxForm({
  form: 'contact-form'
})(ContactForm)
