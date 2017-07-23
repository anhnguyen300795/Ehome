import React from 'react';

import { Link } from 'react-router'

import { truncate } from '../../utils/helpers.js'

const Post = (props) => {
  const {
    post: {
      street,
      city,
      id,
      imageUrls,
      price,
      owner,
      bedrooms,
      bathrooms,
      parkingType,
      lotSizeSqFt
    },
    onDelete
  } = props
  const address = truncate(`${street}, ${city}`, 30)
  return (
    <div className="col-sm-4">
    	
		<div className="post">
			{ onDelete &&
				<div className="delete-image-container">
					<img src="https://image.ibb.co/htCMRQ/rubbish_bin.png" 
						className="delete-image" 
						onClick={onDelete}
						/>
				</div>
			}
			
			<Link to={`apartment/${id}`}>				
				<div className="image">
					<img src={imageUrls && imageUrls[0]} className="img-responsive"/>
					<div className="price">
						<text>{`${price} $`}</text>
					</div>
				</div>
				<div className="info">
					<div className="info-text">
						<h3>Room for rent</h3>
						<h4>{address}</h4>
						<h5>{owner}</h5>
					</div>
					<div className="room-info">
						<h4><i className="fa fa-bed"></i> {bedrooms}</h4>
						<h4><i className="fa fa-bath"></i> {parseInt(bathrooms)}</h4>
						<h4><i className="fa fa-car"></i> {parkingType ? "Yes": "No"}</h4>
						<h4><i className="fa fa-arrows-alt"></i> {lotSizeSqFt}</h4>
					</div>
				</div>
			</Link>
		</div>
	</div>
  )
}

export default Post;
