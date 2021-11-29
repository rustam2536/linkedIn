import React from 'react';
// import {Avatar} from '@material-ui/core'

function Headeroptions ({Icon, title, avatar}) {
    return(
        <div className="header_options">
            {
                avatar && <avatar name={avatar}/>
            }
            {
                Icon && <Icon></Icon>
            }
            <span>{title}</span>
        </div>
    )
}
  
export default Headeroptions;