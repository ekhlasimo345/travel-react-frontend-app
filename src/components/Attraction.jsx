import LocationOnIcon from '@mui/icons-material/LocationOn';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react'
import HearingIcon from '@mui/icons-material/Hearing';
import BlindIcon from '@mui/icons-material/Blind';
import AccessibleIcon from '@mui/icons-material/Accessible';

import './Attraction.css'



function Attraction({element}) {
  
  function getDisabilityIcon(disabilityType) {
    if (disabilityType  === 'MOBILITY' ) {
      return (<AccessibleIcon sx={{fontSize: '1.5em' }} titleAccess="Wheelchair/Walking difficulty"/> )
    } else if (disabilityType  === 'VISION'){ 
      return (<BlindIcon sx={{fontSize: '1.5em'}} titleAccess="Blind/Vision impairment"/>)
    } else { 
      return (<HearingIcon sx={{fontSize: '1.5em'}} titleAccess="Deaf/Hearing weakness"/>)
    }
  }

  return (
    <>
        <Tooltip enterTouchDelay="0" leaveTouchDelay="5000" title={
          <React.Fragment>
             <u className='attraction-name'>{element.attraction.name}</u>
             <br />
             <span>Disability: </span>  {getDisabilityIcon(element.disabilityType)} 
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
