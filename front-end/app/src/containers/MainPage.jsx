import React from 'react';
import FilterForm from '../containers/FilterFormContainer.jsx'
import Content from './Content.jsx'

const MainPage = () => {
  return (
    <div>
	    <div className="header">
	    	<FilterForm/>
	    </div>
	    <div className="posts">
	    	<div className="container">
	    		<Content/>
	    	</div>
    	</div>
    	
   	</div>
  )
}

export default MainPage
