import GoogleMapReact from 'google-map-react';
import { useState , useEffect , useRef} from 'react'
import IconButton from '@mui/material/IconButton';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { useAuth0 } from '@auth0/auth0-react'



import MapSearch from './MapSearch';
import './MapPage.css'
import {defaultDistanceMark} from './MapSearch'
import Attraction from './Attraction';
import AttractionInput from './AttractionInput';
import { Margin } from '@mui/icons-material';


const defaultMapProps = {
    center: {
      lat: Number(sessionStorage.getItem('lastLatitude')) || 40.407311,
      lng: Number(sessionStorage.getItem('lastLongitude')) || -3.708583
    },
    zoom: Number(sessionStorage.getItem('lastZoomLevel')) || defaultDistanceMark.zoom,
    distance: Number(sessionStorage.getItem('lastDistanceKm')) || defaultDistanceMark.distance,
  };


function MapPage() {
      const [fetchedAttractions, setFetchedAttractions] = useState([])
      const [mapSearchParams, setMapSearchParams] = useState({
        center: defaultMapProps.center,
        zoom: defaultMapProps.zoom,
        distance: defaultMapProps.distance
      })
      const [newAttractionMode, setNewAttractionMode] = useState(false)
      const [newAttractionObject, setNewAttractionObject] = useState(null)
      const { isAuthenticated, getAccessTokenSilently } = useAuth0();
      const circleRef= useRef(null)


      useEffect(() => {
        redrawCircle()
        sessionStorage.setItem('lastLatitude', mapSearchParams.center.lat)
        sessionStorage.setItem('lastLongitude', mapSearchParams.center.lng)
        sessionStorage.setItem('lastZoomLevel', mapSearchParams.zoom)
        sessionStorage.setItem('lastDistanceKm', mapSearchParams.distance)

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
      strokeColor: "#0f5771e2",
      strokeOpacity: 0.80,
      strokeWeight: 2,
      fillColor: "#4AA86D",
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

  function clickedOnMap({lat, lng}) {
    if (newAttractionMode) {
      setNewAttractionObject({
        attractionName: '',
        attractionLongitude: lng,
        attractionLatitude: lat,
        disabilityType: null,
        ratingLevel: null
      })
      setNewAttractionMode(false)
    }
  }

 function newAttractionInput (newAttraction){
    setNewAttractionObject(null)

     if (newAttraction !== null) {
      getAccessTokenSilently().then(accessToken => {
        fetch(`${import.meta.env.VITE_TRAVEL_APP_BACKEND_BASE_URL}/api/attraction`,
          {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${accessToken}`,
              "content-type": "application/json",
            },
            body: JSON.stringify(newAttraction),
          }
        )
        .then(response => setMapSearchParams({
          center: {
            lng: newAttraction.attractionLongitude,
            lat: newAttraction.attractionLatitude, 
          },
          zoom: mapSearchParams.zoom,
          distance: mapSearchParams.distance
        }))
        .catch(error => console.error(error))
      });
    }

 }

  return (
    <>
  
     <div style={{ height: '100vh', width: '100%' }}>
        <div  className="map-toolbar">
          {newAttractionMode ? (<span className="map-toolbar-guid">Please click on map where you want to add attraction.</span>) : (<MapSearch searchCallback={ newSearch } />)}
          { isAuthenticated && !newAttractionMode && (<IconButton aria-label="add new attraction" onClick={e => setNewAttractionMode(true)}>
            <AddLocationAltIcon titleAccess="Add new attraction" />
          </IconButton > )} 
        </div>
               
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultMapProps.center}
        center={mapSearchParams.center}
        defaultZoom={defaultMapProps.zoom}
        zoom={mapSearchParams.zoom}
        yesIWantToUseGoogleMapApiInternals= {true}
        onGoogleApiLoaded={({ map, maps }) => drawCircleOnMapLoaded(map, maps)}
        onClick={clickedOnMap}
      >
        {fetchedAttractions.map(attr => (
             <Attraction key={attr.id} element={attr} lat={attr.attraction.location.coordinates[1]} lng={attr.attraction.location.coordinates[0]}/>
            ))}
        {newAttractionObject && (<AttractionInput element={newAttractionObject} lat={newAttractionObject.attractionLatitude} lng={newAttractionObject.attractionLongitude} saveCallback={newAttractionInput}/>) }
      </GoogleMapReact>

    </div>
    </>
  )
}

export default MapPage
