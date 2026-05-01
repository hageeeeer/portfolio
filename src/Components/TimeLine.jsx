import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function TimeLine() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
    easing: 'ease-out-cubic'
  });
}, []);
  return (
    <div className='py-5'>
      <div className="floating-elements">
        <div className="floating-circle" />
        <div className="floating-circle" />
        <div className="floating-circle" />
      </div>
      <div className="wrap">
        <div className="header">
          <h2 className="text-5xl font-light my-5">Education & <span className="text-main">Experience</span></h2>

        </div>
        <div className="timeline">
          <div className="timeline-item" data-aos="fade-right" data-aos-duration="1000">
            <div className="timeline-content">
              <div className="date">2022 - {new Date().getFullYear()}</div>
              <div className="job-title">Senior Instructor Frontend</div>
              <div className="company">Route Academy</div>
              <div className="description">
                As a Frontend Instructor, I teach and mentor students in the skills required to build modern, responsive, and user-friendly web applications. My role combines technical expertise with teaching ability, helping learners progress from the basics of web development to advanced frontend concepts.
              </div>
              <div className="skills">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Angular</span>
              </div>
            </div>
            <div className="timeline-marker" />
          </div>
          <div className="timeline-item" data-aos="fade-left" data-aos-duration="1000">
            <div className="timeline-content">
              <div className="date">2020 - 2022</div>
              <div className="job-title">Frontend Mentor</div>
              <div className="company">Route academy</div>
              <div className="description">
                I combine technical teaching with personalized guidance to help students and aspiring developers grow into confident frontend professionals. I focus on both the technical skills and the mindset needed to succeed in web development.
              </div>

            </div>
            <div className="timeline-marker" />
          </div>
          <div className="timeline-item" data-aos="fade-right" data-aos-duration="1000">

            <div className="timeline-content">
            <div className="job-title">Bachelor Degree of Computer Science</div>
           </div>
          </div>
        </div>
      </div>
    </div>

  )
}
