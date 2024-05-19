import React from 'react'
import cccovenas from '../images/cccovenas.jpg'

const Cccovenas = ( { className } ) => {
  return (
    <div className={`image-container ${className}`}>
        <img src={cccovenas} alt="Paisaje playa Coveñas Sucre Colombia" className="image"/>
    </div>
  )
}

export default Cccovenas