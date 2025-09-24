import GoogleMapReact from 'google-map-react';
import { useState , useEffect , useRef} from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Tooltip from '@mui/material/Tooltip';


import MapSearch from './MapSearch';
import './MapPage.css'
import {defaultDistanceMark} from './MapSearch'


const defaultMapProps = {
    center: {
      lat: 	51.260197,
      lng: 4.402771
    },
    zoom: defaultDistanceMark.zoom
  };


function MapPage() {
      const [fetchedAttractions, setFetchedAttractions] = useState([])
      
      const [mapSearchParams, setMapSearchParams] = useState({
        center: defaultMapProps.center
      })
      const circleRef= useRef(null)


      useEffect(() => {
        fetch(`${import.meta.env.VITE_TRAVEL_APP_BACKEND_BASE_URL}/api/attraction?searchPointLongitude=4.402771&searchPointLatitude=51.260197&searchDistanceKm=10`)
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setFetchedAttractions(data.content))
    },[mapSearchParams])

    function newSearch(longitude, latitude, zoomLevel, distanceKm) {
      setMapSearchParams({
        center: {
          lng: longitude,
          lat: latitude, 
        },
        zoom: zoomLevel,
        distance: distanceKm
      })
    }


  function drawCircleOnMapLoaded(map, maps){
    circleRef.current= new maps.Circle({
      strokeColor: "#035f08ff",
      strokeOpacity: 0.30,
      strokeWeight: 2,
      fillColor: "#09cb23ff",
      fillOpacity: 0.15,
      map: map,
      center: mapSearchParams.center,
      radius: mapSearchParams.distance * 1000
    })
    
  }


  return (
    <>
  
     <div style={{ height: '100vh', width: '100%' }}>
        <MapSearch searchCallback={ newSearch } />
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultMapProps.center}
        center={mapSearchParams.center}
        defaultZoom={defaultMapProps.zoom}
        zoom={mapSearchParams.zoom}
        yesIWantToUseGoogleMapApiInternals= {true}
        onGoogleApiLoaded={({ map, maps }) => drawCircleOnMapLoaded(map, maps)}
        
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
