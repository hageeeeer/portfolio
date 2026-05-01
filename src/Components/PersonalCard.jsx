import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';  // 👈 Import Autoplay module
import img1 from '../assets/ecommecrs.png'
import img2 from '../assets/elevate.png'
import img3 from '../assets/landing.png'
import img4 from '../assets/movie.png'
import img5 from '../assets/quiz.png'

import 'swiper/css';

export default function PersonalCard() {
  return (
    <div className="p-6 border border-brdr-color rounded-3xl shadow-md xl:w-full w-2/3 mx-auto">
      <div className='p-5'>
        <div className='flex justify-between items-center'>
          <span className='text-2xl font-bold'>Hajar</span>
          <span>FrontEnd developer</span>
        </div>

        <Swiper
          modules={[Autoplay]}          // 👈 Register the module
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{                   // 👈 Autoplay config
            delay: 2500,
            disableOnInteraction: false, // keeps playing after user swipes
          }}
          loop={true}                   // 👈 Loops back to the first slide
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img src={img1} className='h-100 w-full object-cover py-4' alt="" /></SwiperSlide>
          <SwiperSlide><img src={img2} className='h-100 w-full object-cover py-4' alt="" /></SwiperSlide>
          <SwiperSlide><img src={img3} className='h-100 w-full object-cover py-4' alt="" /></SwiperSlide>
          <SwiperSlide><img src={img4} className='h-100 w-full object-cover py-4' alt="" /></SwiperSlide>
        </Swiper>

        <p className='text-center text-secondary'>I am a Frontend developer with a passion for creating beautiful and functional web applications. I have a strong background in HTML, CSS, and JavaScript,</p>
        <div className='flex justify-center gap-4 my-5'>
          <a href=''><i className="fa-brands fa-facebook-f"></i></a>
          <a href=""><i className="fa-brands fa-linkedin"></i></a>
          <a href=""><i className="fa-brands fa-github"></i></a>
        </div>

        <button className='px-20 py-2 rounded-4xl my-5 border-secondary border-3 block mx-auto hover:bg-main transition-colors duration-500'>Hire Me</button>
      </div>
    </div>
  )
}