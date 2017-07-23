import React from 'react';
import { Field, reduxForm } from 'redux-form'
import classnames from 'classnames'

import LoginInput from "./LoginInput.jsx";

const Login = (props) => {
  const { opened, handleSubmit, activeTab, changeActiveTab, submitting, error } = props
  const modalClasses = classnames('modal-login', { 'modal-opened': opened })
  return (
    <div className={modalClasses}>
    	<div className="full-screen">
		  <div className="login-modal">
		  	<div className="login-tab">
		  		{['Login', 'Sign Up'].map(tab => {
		  			const tabClassNames = classnames('tab-header', { 'tab-active': tab === activeTab})
		  			return (<div key={tab} className={tabClassNames} onClick={() => changeActiveTab(tab)}>{tab}</div>)
		  		})}
		  	</div>
		    <form className="form" onSubmit={handleSubmit}>
		    	<center>
		    	{ activeTab === 'Login'
		    		?<img src="http://www.computer-repairs-auckland.co.nz/images/home_with_wifi.png" alt=""/>
			    	: <img src="http://i.imgur.com/8XZaKyN.png" alt=""/>
			    }
		    	</center>
		    	{error && <center className="error-message"><strong>{error}</strong></center>}
		    	<Field name="username" component={LoginInput}/>
		      	<Field name="password" component={LoginInput}/>
		      	<button className="pull-right loginButton" type="submit" disabled={submitting}>{activeTab}</button>
		    </form>		    
		  </div>
		</div>  	
   	</div>
  )
}

export default reduxForm({ form: 'login-form' })(Login)
