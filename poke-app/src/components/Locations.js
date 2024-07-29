import React from 'react'

function Locations() {
  return (
    <div className="location-container">
    <h1 className="location-title">Locations</h1>
    <ul className="locations">
        <li className="location"><button className="location-button" type="button">Location1</button></li>
        <li className="location"><button className="location-button" type="button">Location2</button></li>
        <li className="location"><button className="location-button" type="button">Location3</button></li>
    </ul>
</div>
  )
}

export default Locations