import React from 'react'
import {Outlet} from 'react-router-dom'

const Body = ({ isBlurred }) => {
  return (
    <div className={`transition ${isBlurred ? 'blur-md' : ''}`}>
      <Outlet/>
    </div>
  )
}

export default Body
