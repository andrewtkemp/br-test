import React from "react";
import Map from "../Map";
import "./style.css";
const ListItem = (props) => (
    <div className="col s12 l6 xl4">
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={props.details.backgroundImageURL} alt="food" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{props.details.name}<i className="material-icons right">more_vert</i></span>
        <p>{props.details.category}</p>
      </div>
      <div className="card-reveal">
          <Map position={{ lat: props.details.location.lat, lng: props.details.location.lng }} name={props.details.name} isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyB50oz4bsJhsmOEf_3UgQ0XtdF3dlgELwU&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `150px` }} />}
            mapElement={<div style={{ height: `100%` }} />} />
        <span className="card-title activator white-text text-darken-4 header"><strong className="restaurant-name">{props.details.name}</strong><br /><span className="category">{props.details.category}</span></span>
        <div className="content">
          <p>{props.details.location.address}<br />
            {props.details.location.city}, {props.details.location.state} {props.details.location.postalCode}
          </p>
          <p>
            {props.details.contact && props.details.contact.formattedPhone ? props.details.contact.formattedPhone : "No Phone Number Available" }
          </p>
          <p>{props.details.contact && props.details.contact.twitter ? `@${props.details.contact.twitter}` : "No Twitter Handle Available" }</p>
        </div>
      </div>
    </div>
  </div>
)

export default ListItem