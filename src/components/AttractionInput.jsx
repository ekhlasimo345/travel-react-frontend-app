import LocationOnIcon from '@mui/icons-material/LocationOn';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react'
import HearingIcon from '@mui/icons-material/Hearing';
import BlindIcon from '@mui/icons-material/Blind';
import AccessibleIcon from '@mui/icons-material/Accessible';

import './Attraction.css'

function AttractionInput({element, saveCallback}) {
  
  function save(event) {
      event.preventDefault()
      saveCallback(element)
  }

  function cancel(event) {
      event.preventDefault()
      saveCallback(null)
  }
      
  

  return (
    <>
        <Tooltip open="true" title={
          <React.Fragment >
            <form onSubmit={save}>
             <input type="text" required onChange={e => element.attractionName = e.target.value} />
             <br />
             <span>Disability: </span>
             <input  type="radio" value="MOBILITY" name="disability" required id="mobility" onChange={e => element.disabilityType = e.target.value} />
             <label for="mobility"><AccessibleIcon sx={{fontSize: '1.5em' }} titleAccess="Wheelchair/Walking difficulty"/></label>
             <input  type="radio" value="VISION" name="disability" required id="mobility" onChange={e => element.disabilityType = e.target.value} />
             <label for="mobility">(<BlindIcon sx={{fontSize: '1.5em'}} titleAccess="Blind/Vision impairment"/></label>
             <input  type="radio" value="AUDIO" name="disability" required id="hearing" onChange={e => element.disabilityType = e.target.value} />
             <label for="hearing"><HearingIcon sx={{fontSize: '1.5em'}} titleAccess="Deaf/Hearing weakness"/></label>
             <br />
             <span>Rating: </span>
              <input  type="radio" value="GOOD" name="rating" required id="good" onChange={e => element.ratingLevel = e.target.value} />
             <label className="rating-word GOOD " for="good">GOOD</label>
             <input  type="radio" value="NEUTRAL" name="rating" required id="neutral" onChange={e => element.ratingLevel = e.target.value} />
             <label className="rating-word NEUTRAL " for="neutral">NEUTRAL</label>
             <input  type="radio" value="BAD" name="rating" required id="bad" onChange={e => element.ratingLevel = e.target.value} />
            <label className="rating-word BAD " for="bad">BAD</label>
             <br />
             <input type="submit" value="Save" />
              <input type="button" value="Cancel" onClick={cancel} />
            </form>
          </React.Fragment>
        } >
            <LocationOnIcon  className="attraction-icon-box NEW"  />
        </Tooltip>

    </>
  )
}

export default AttractionInput
