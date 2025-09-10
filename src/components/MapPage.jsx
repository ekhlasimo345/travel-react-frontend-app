import GoogleMapReact from 'google-map-react';
import { useState , useEffect } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Tooltip from '@mui/material/Tooltip';



import './MapPage.css'

const defaultMapProps = {
    center: {
      lat: 	51.260197,
      lng: 4.402771
    },
    zoom: 11
  };


function MapPage() {
      const [fetchedAttractions, setFetchedAttractions] = useState([])


      useEffect(() => {
        fetch("https://devoted-achievement-production.up.railway.app/api/attraction?searchPointLongitude=4.402771&searchPointLatitude=51.260197&searchDistanceKm=10")
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setFetchedAttractions(data.content))
    },[])


  return (
    <>
     <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCTTwaHdDb5GtrNJraHlZI6QEd6R1Mtqyg" }}
        defaultCenter={defaultMapProps.center}
        defaultZoom={defaultMapProps.zoom}
      >
        {fetchedAttractions.map(element => (
              <Tooltip title={element.attraction.name} lat={element.attraction.location.coordinates[1]} lng={element.attraction.location.coordinates[0]}>
                  <LocationOnIcon  className="attraction-icon-box"/>
              </Tooltip>

            ))}
      </GoogleMapReact>

    </div>
    </>
  )
}

export default MapPage
