import React from 'react'

const Header = () => {
  return (
    <div className="w-full h-16 bg-red-600 shadow-md flex justify-between" >
      <img width="50px" height="50px" alt="logo" src="" />
      <div className="max-w-md flex justify-center align-center">
        <span className="text-white p-8 h-full">Home</span>
        <span className="text-white  p-8 h-full">Images</span>
        <span className="text-white  p-8 h-full">Contact</span>
      </div>
    </div>
  )
}

export default Header
