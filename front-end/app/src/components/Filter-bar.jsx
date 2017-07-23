import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'

import SliderInput from './SliderInput.jsx';

const FilterForm = (props) => {
  const { handleSubmit, reset, submitting, queryParams } = props
  return (
    <div className="filter-bar">
		<form className="container" onSubmit={handleSubmit}>
			<div className="upperForm">
				<center><img src="http://i.imgur.com/x85LtZs.png" alt=""/></center>
				<div className="col-md-3">
					<label htmlFor="">Location</label>
					<Field name="city" className="form-control" component="input" type="text" placeholder="location"/>
				</div>
				<div className="col-md-3">
					<label htmlFor="">Bedrooms</label>
					<Field name="bedrooms" className="form-control" component="input" type="number" min="1"/>
				</div>
				<div className="col-md-3">
					<label htmlFor="">Bathrooms</label>
					<Field name="bathrooms" className="form-control" component="input" type="number" min="1"/>
				</div>
				<div className="col-md-3">
					<label htmlFor="">Parking</label>
					<Field name="garage" className="form-control" component="select">
						<option value="yes">Yes</option>
			            <option value="no">No</option>
					</Field>
				</div>

				<div className="col-md-4">
					<label htmlFor="">Price (USD)</label>
					<Field component={SliderInput} name="price" maxBound={12000} minBound={500}/>
				</div>
				<div className="col-md-4">
					<label htmlFor="">Area (Sq feet)</label>
					<Field component={SliderInput} name="area" maxBound={12000} minBound={50}/>
				</div>
				<div className="col-md-4">
					<button type="submit" className="btn btn-primary" disabled={submitting}>Search</button>
				</div>
			</div>

			{queryParams &&
				<div className="col-md-4 col-md-offset-4">
					<Link to="/" className="btn btn-danger">Clear</Link>
				</div>
			}
		</form>
	</div>
  )
}

export default reduxForm({
  form: 'filter-form',
  initialValues: {
    price: { min: 2000, max: 8000 },
    area: { min: 1500, max: 10000 },
    bedrooms: 3,
    bathrooms: 3,
    parking: "yes"
  }
})(FilterForm);
