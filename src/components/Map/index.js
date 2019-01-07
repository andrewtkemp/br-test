import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const Map = withScriptjs(withGoogleMap((props) => 
  <GoogleMap
    defaultZoom={18}
    defaultCenter={props.position}
  >
  <Marker position={props.position}></Marker>
  </GoogleMap>
))


export default Map;