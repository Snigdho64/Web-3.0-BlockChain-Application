import React from 'react'

const Loader = () => {
  return (
    <div className="w-full relative h-full grid place-items-center">
      <div className="animate-spin border-l-2 rounded-full w-32 h-32 border-red-700"></div>
      <h1 className="absolute text-white">Please Wait...</h1>
    </div>
  )
}

export default Loader
