import React from 'react';
import { Field } from 'redux-form'

const Property = ({ property: { title, value, key }, isEditing }) => {
  console.log('test');
  return (
    <div className="property">
      <span className="property-title">{title}: </span>
      {!isEditing && 
      	<span className="property-value">
        	{value}
     	</span>
      }

      {isEditing && 
	      <span className="property-input">
	      	<Field className="form-control" component="Input" type="text" name={key}/>
	      </span>
      }
    </div>
  )
}

export default Property
