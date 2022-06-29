import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneSlash } from "@fortawesome/free-solid-svg-icons";

const Error = () => {
  return (
      <div className='flex justify-center items-center gap-4 h-custom'>
          <FontAwesomeIcon icon={faPlaneSlash} className='text-4xl' />
          <h1 className='text-4xl'>Your Offline</h1>
    </div>
  )
}

export default Error