import GoogleMapReact from 'google-map-react';
import { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';

import './MapPage.css'

const defaultMapProps = {
    center: {
      lat: 	51.260197,
      lng: 4.402771
    },
    zoom: 11
  };


function MapPage() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCTTwaHdDb5GtrNJraHlZI6QEd6R1Mtqyg" }}
        defaultCenter={defaultMapProps.center}
        defaultZoom={defaultMapProps.zoom}
      >
        <LocationOnIcon lat="	51.260197" lng="4.402771" className="attraction-icon-box"/>
      </GoogleMapReact>

    </div>
    </>
  )
}

export default MapPage
