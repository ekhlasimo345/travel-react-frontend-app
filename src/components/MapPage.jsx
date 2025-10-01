import GoogleMapReact from 'google-map-react';
import { useState , useEffect , useRef} from 'react'


import MapSearch from './MapSearch';
import './MapPage.css'
import {defaultDistanceMark} from './MapSearch'
import Attraction from './Attraction';


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
        center: defaultMapProps.center,
        zoom: defaultMapProps.zoom,
        distance: defaultDistanceMark.distance
      })
      const circleRef= useRef(null)


      useEffect(() => {
        redrawCircle()

        fetch(`${import.meta.env.VITE_TRAVEL_APP_BACKEND_BASE_URL}/api/attraction?searchPointLongitude=${mapSearchParams.center.lng}&searchPointLatitude=${mapSearchParams.center.lat}&searchDistanceKm=${mapSearchParams.distance}`)   
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
      strokeColor: "#ebe00aff",
      strokeOpacity: 0.80,
      strokeWeight: 2,
      fillColor: "#cb7d09ff",
      fillOpacity: 0.35,
      map: map,
      center: mapSearchParams.center,
      radius: mapSearchParams.distance * 1000
    })
  }

  function redrawCircle() {
    if (circleRef.current) {
      circleRef.current.setCenter(mapSearchParams.center)
      circleRef.current.setRadius(mapSearchParams.distance * 1000)
    }
   
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
        {fetchedAttractions.map(attr => (
             <Attraction element={attr} lat={attr.attraction.location.coordinates[1]} lng={attr.attraction.location.coordinates[0]}/>
            ))}
      </GoogleMapReact>

    </div>
    </>
  )
}

export default MapPage
