import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { useState } from 'react'




function MapSearch({searchCallback}) {
  const [searchText, setSearchText] = useState("")


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
        searchCallback(data.places[0].location.longitude, data.places[0].location.latitude)
      }
    })
  }


  return (
    <>
       <Stack direction="row" justifyContent="center" alignItems="center">
    <TextField label="search location" variant="outlined" placeholder="Madrid" 
        value={searchText} onChange={e => setSearchText(e.target.value)}
    />
        <IconButton aria-label="delete" onClick={ searchForLocationByText }>
        <SearchIcon  />
      </IconButton >
    </Stack> 
     
    </>
  )
}
export default MapSearch
