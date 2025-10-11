import LocationOnIcon from '@mui/icons-material/LocationOn';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react'

import './Attraction.css'

function AttractionInput({element}) {
  

  return (
    <>
        <Tooltip open="true" title={
          <React.Fragment >
            <form>
             <input type="text" required onChange={e => element.attractionName = e.target.value} />
             <br />
             <span>Disability: </span>
             <br />
             <span>Rating: </span>
             <br />
             <button>save</button>
            </form>
          </React.Fragment>
        } >
            <LocationOnIcon  className="attraction-icon-box NEW"  />
        </Tooltip>

    </>
  )
}

export default AttractionInput
