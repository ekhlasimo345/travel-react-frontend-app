import LocationOnIcon from '@mui/icons-material/LocationOn';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react'

import './Attraction.css'

function Attraction({element}) {
  return (
    <>
        <Tooltip enterTouchDelay="0" leaveTouchDelay="5000" title={
          <React.Fragment>
             <u className='attraction-name'>{element.attraction.name}</u>
             <br />
             <span>Disability: </span> {element.disabilityType}
             <br />
             <span>Rating: </span> <span className={'rating-word ' + element.ratingLevel }>{element.ratingLevel}</span>

          </React.Fragment>
        } >
            <LocationOnIcon  className={'attraction-icon-box ' + element.ratingLevel }  />
        </Tooltip>

    </>
  )
}

export default Attraction
