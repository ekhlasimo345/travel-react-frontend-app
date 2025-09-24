import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';


import { useState } from 'react'

const searchDistanceMarks = [
  {
    value: 0,
    distance: 0.5,
    display: '0.5km',
    zoom: 15.5
  },
  {
    value: 25,
    distance: 1,
    display: '1km',
    zoom: 14.5
  },
  {
    value: 50,
    distance: 5,
    display: '5km',
    zoom: 12
  },
  {
    value: 75,
    distance: 25,
    display: '25km',
    zoom: 10
  },
  {
    value: 100,
    distance: 100,
    display: '100km',
    zoom: 8
  }
]

const defaultDistanceMark = searchDistanceMarks[2]

function MapSearch({searchCallback}) {
  const [searchText, setSearchText] = useState("")
  const [searchDistanceValue, setSearchDistanceValue] = useState(defaultDistanceMark.value)



  function searchForLocationByText() {
    fetch(`https://places.googleapis.com/v1/places:searchText`,
        {
            method: 'POST',
            headers: {
              'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
              'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.location',
              'content-type': 'application/json',
          },
          body: JSON.stringify({ textQuery: searchText }),
        }
    ).then(response => response.json())
    .then(data => {
      if (data.places.length > 0) {
        var mark = searchDistanceMarks.filter(e => e.value == searchDistanceValue)[0]
        searchCallback(data.places[0].location.longitude, data.places[0].location.latitude, mark.zoom, mark.distance)
      }
    })
  }

   function showDistanceLabel(value) {
    return searchDistanceMarks.filter(e => e.value == value)[0].display
   }


  return (
    <>
       <Stack spacing="4" sx={{p:1, gap:'15px', }} direction="row" justifyContent="center" alignItems="center">
    <TextField label="search location" variant="outlined" placeholder="Madrid" 
        value={searchText} onChange={e => setSearchText(e.target.value)}
    />

      <Box sx={{ width: 150 }}>
        <Slider
          aria-label="Restricted values"
          defaultValue={defaultDistanceMark.value}
          value = {searchDistanceValue}
          onChange={e => setSearchDistanceValue(e.target.value)}
          step={null}
          valueLabelFormat={showDistanceLabel}
          valueLabelDisplay="auto"
          marks={searchDistanceMarks}
        />
      </Box>
        <IconButton aria-label="delete" onClick={ searchForLocationByText }>
        <SearchIcon  />
      </IconButton >
    </Stack> 
     
    </>
  )
}
export default MapSearch
export {defaultDistanceMark}
