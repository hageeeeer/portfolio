import React from 'react'
import HeaderContent from './HeaderContent'
import video from '../assets/video1.mp4'
import SideNav from './SideNav'

export default function Header({ activeSection, onNavClick }) {
  return (
    <div id="home" className="xl:min-h-screen xl:w-full w-2/3">
      <SideNav activeSection={activeSection} onNavClick={onNavClick} />
      <div className=" xl:m-5 my-5">
        {/* Background video */}
        <video
          src={video}
          autoPlay
          loop
          muted
          aria-hidden="true"
          className="fixed top-0 left-0 w-full h-full min-h-full object-cover -z-10 video-fadein"
          style={{ height: '100%', minHeight: '100%', '--video-fadein-duration': '2s' }}
        ></video>
         
        {/* Overlay (for readability) */}
        <div className="fixed inset-0 bg-black/40 -z-10"></div>
      
        {/* Content */}
        <div className='xl:block hidden'>
        <HeaderContent  />
        </div>
        <div className='xl:hidden block'>
        <div className="container">
          <h2  className="text-4xl font-light leading-relaxed"  >
        Say Hi from <span className='text-main'>Hajar</span>, <br/>Frontend Developer
        </h2>
        </div>
        </div>
        <div className="container">
          <p className="my-5 text-secondary max-w-2xl leading-relaxed">
          I design and code beautifully simple things and I love what I do.
          <br /> Just simple like that!
        </p>
        </div>
        
        {/* img */}
        <div className='flex items-center justify-center'>
          <img src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/round-text.png" className='cursor-pointer spin  my-5 ' alt="" />
        </div>
      </div>
    </div>
  )
}
