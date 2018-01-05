import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export default class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: true,
  }

  constructor(props) {
    super(props);
}

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }



  render() {
    console.log("LAT: "+JSON.stringify({ lat: this.props.lat, lng: this.props.long }));
    const MyMapComponent = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDhawZtUH10i_izN_cRiy5uRGB0n5143tY&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `23rem`, paddingTop:`1rem` }} />,
        mapElement: <div style={{ height: `100%` }} />,
        location : { lat: this.props.lat, lng: this.props.long }
      }),
      withScriptjs,
      withGoogleMap
    )((props) =>
      <GoogleMap
        defaultZoom={16}
        defaultCenter={props.location}
      >
        {props.isMarkerShown && <Marker position={props.location} onClick={props.onMarkerClick} />}
      </GoogleMap>
    );
    return (
      <MyMapComponent {...this.props}
        isMarkerShown="true" lat={ this.props.lat } long={ this.props.long }
      />
    )
  }
}

