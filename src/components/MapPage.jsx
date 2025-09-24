import GoogleMapReact from 'google-map-react';
import { useState , useEffect } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Tooltip from '@mui/material/Tooltip';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';


import MapSearch from './MapSearch';
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
      const [mapSearchParams, setMapSearchParams] = useState({
        center: defaultMapProps.center
      })


      useEffect(() => {
        fetch(`${import.meta.env.VITE_TRAVEL_APP_BACKEND_BASE_URL}/api/attraction?searchPointLongitude=4.402771&searchPointLatitude=51.260197&searchDistanceKm=10`)
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setFetchedAttractions(data.content))
    },[])

    function newSearch(longitude, latitude) {
      setMapSearchParams({
        center: {
          lng: longitude,
          lat: latitude
        }
      })
    }

  return (
    <>
  
     <div style={{ height: '100vh', width: '100%' }}>
        <MapSearch searchCallback={ newSearch } />
          <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        //getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={10}
        marks
        min={10}
        max={100}
      />
    </Box>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultMapProps.center}
        center={mapSearchParams.center}
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
