import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, submit, Form } from 'redux-form'

import { updatePost } from '../../redux/api.js'
import { getUser } from "../../redux/entities/users/selector.js";

import Property from './Property.jsx'

export class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    }
  }

  changeEditingState = (isEditing) => {
    this.setState({...this.state, isEditing });
  }

  save = (values) => {
    this.props.updatePost(values)
      .then(res => {
        this.changeEditingState(false)
      })
  }

  render() {
    const { isEditing } = this.state
    const { handleSubmit, properties, submitForm, userCanUpdatePost } = this.props
    return (
      <div className="properties row">
	      <h4>PROPERTY INFORMATION</h4>
	      {userCanUpdatePost && 
		      <img 
		      	src="https://image.ibb.co/guyDMQ/content.png" 
		      	onClick={() => this.changeEditingState(true)}
		      	/>
	      }

	      {isEditing &&
      		<img 
        	src="https://image.ibb.co/gENMak/diskette.png"
        	onClick={submitForm}
        	/>
	      }
	      <Form onSubmit={handleSubmit(this.save)}>
	        {properties.map((property, index) => {
	          return (
	            <div className="col-sm-4">
	              <Property property={property} isEditing={isEditing}/>
	            </div>
	          )
	        })}
	      </Form>
	    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = getUser(state)
  return {
    initialValues: ownProps.apartment,
    userCanUpdatePost: user && user.role === "ROLE_ADMIN"
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: () => dispatch(submit('post-form')),
    updatePost: (data) => dispatch(updatePost(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: 'post-form' })(Properties))
