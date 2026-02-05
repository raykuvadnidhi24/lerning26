import React from 'react'
import { Link } from 'react-router-dom'

export const Teams = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>TeamName</h1>
        <ul>
          <li>
            <Link to="/teamdetails/SRK">SRK</Link>
          </li>
          <li>
            <Link to="/teamdetails/RCB">RCB</Link>
          </li>
          <li>
            <Link to="/teamdetails/MI">MI</Link>
          </li>
          
        </ul>
    </div>
  )
}