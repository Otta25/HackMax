import React from 'react'
import  {Link}  from 'react-router-dom'
import background from '../Celebrating/background.png'

function Celebrating() {
  return (
    <div className='celebrating w-full h-[70vh] flex items-center justify-center desktop:items-start desktop:justify-start desktop:mt-[20vh] pt-10 desktop:pl-[70px]'>
        <div className='flex flex-col items-center w-[90%] desktop:items-start desktop:text-left desktop:w-[30vw] text-textPrimary'>
            <span className=' text-lg'>100 años celebrando cada historia</span>
            <h2 className=' text-[30px] font-bold'>Warner Bros: 100 años de grandes <br /> historias</h2>
            <p>Desde clásicos atemporales hasta nuevas aventuras emocionantes, hemos sido parte de tus momentos más memorables en la pantalla.</p>
            <Link className='p-4 mb-10 bg-[rgba(100,100,100,0.4)] rounded-md w-[200px] flex items-center justify-center mt-5 hover:bg-[#] hover:border-[2px] hover:border-[#4205c5] '>Mas informacion</Link>
        </div>
    </div>
  )
}

export default Celebrating