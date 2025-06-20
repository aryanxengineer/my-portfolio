import React from 'react'
import portfolio from '../assets/projects/portfolio.png'

const ProjectCard = () => {
  return (
    <div className='relative w-full h-full lg:h-[60%] rounded-xl shadow-md shadow-red-600 overflow-hidden lg:top-0 lg:absolute'>
      <div style={{
        backgroundColor: 'rgb(0, 0, 0, .3)',

      }} className='absolute w-full h-full z-10'></div>
      <div className='absolute w-full h-full'>
        <img src={portfolio} alt="project image 1" className='h-full w-full bg-center bg-cover' />
      </div>
      <div></div>
    </div>
  )
}

export default ProjectCard