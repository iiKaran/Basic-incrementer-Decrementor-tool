import React from 'react'
import Imgcontainer from './Imgcontainer'
import Maincont from './Maincont'
export default function Head() {
  return (
    <div>
      <Imgcontainer />
      {/* container in which the main heading and the image animation is showen */}
      <Maincont /> 
    </div>
  )
}
