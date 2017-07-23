import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router'
import { reset } from 'redux-form'

import { getOnePost } from "../../redux/entities/posts/selectors.js";
import { MAP_TITLES } from "../../utils/property-const";
import { getUser } from "../../redux/entities/users/selector.js";
import { sendOrder } from "../../redux/api"

import Map from "../components/Map.jsx";
import LoadingSpinner from '../components/Spiner.jsx'
import Properties from '../components/Properties.jsx'
import ContactForm from '../components/ContactForm.jsx'

export class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: ''
    }
  }

  changeMainImage = (mainImage) => this.setState({ mainImage })

  mapProperties = (data) => {
    return Object.keys(MAP_TITLES)
      .map(key => {
        return {
          key,
          title: MAP_TITLES[key],
          value: data[key] || 'N/A'
        }
      })
  }

  sendMessage = (values) => {
    return sendOrder({...values, userId: this.props.user.id })
      .then(() => {
        this.props.resetForm()
        alert("Message Submited")
      })
  }

  render() {
    const { apartment, user } = this.props
    if (!apartment) {
      return (<LoadingSpinner/>)
    }

    const mainImage = this.state.mainImage || apartment.imageUrls[0]
    const properties = this.mapProperties(apartment)
    return (
      <div className="details">
       <div className="cover">
          <div className="container">
            <Link to={'/'} className="back-button">Back</Link>
          </div>          
       </div>
       <div className="container">
          <div className="detail-content">
            <div className="row">
              <div className="col-sm-8">
                <img src={mainImage} className="main-img"/>

                <div className="sm-img">
                  {apartment.imageUrls.map((img, index) => {
                    return (<img src={img} key={index} onMouseOver={()=>this.changeMainImage(img)} />)
                  })}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="basic-info">
                  <h2>Apartment for rent</h2>
                    <h3>{`${apartment.street}, ${apartment.city}`}</h3>   
                    <h1><span className="label label-danger">$ {apartment.price}</span></h1>  
                  </div>
                  <div className="map">
                    <Map latitude={parseFloat(apartment.latitude)} longitude={parseFloat(apartment.longitude)}/>
                  </div>  
              </div>
            </div>          
            <hr/>
            <Properties properties={properties} apartment={apartment} />
            <hr/>
            <div>
              <div className="row">
                <center>
                  <h4>Contact</h4>
                </center>
                <div className="col-sm-7 col-sm-offset-2">
                  <ContactForm noUser={!user} onSubmit={this.sendMessage}/>
                </div>
                <div className="col-sm-2">
                  <img src="https://image.ibb.co/eQfbbQ/man.png" className="img-responsive"/>
                </div>
              </div>
            </div>
          </div>
       </div>
       
    </div>
    );
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
    apartment: getOnePost(state, ownProps.params.apartmentID),
    user: getUser(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetForm: () => dispatch(reset('contact-form'))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Details))
