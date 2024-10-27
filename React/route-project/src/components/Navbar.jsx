import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='w=screen h-14 shadow-purple-500 shawdow-md flex flex-row justify-center items-center'>
        <div className='w-[40%] flex justify-start items-center font-bold text-2*1 text-purple-500'>
            Max Store
        </div>
        <div className='w=[40%] flex justify-end items-center'>
            <ul className='w=full flex flex-row justify-center items-center'>
                <li>Home</li>
                <li>Products</li>
                <li>Contact</li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
