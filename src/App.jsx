
import Header from './Components/Header'
import PersonalCard from './Components/PersonalCard'
import SheetDemo from './Components/Sheet'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect, useRef, useState } from 'react';
import About from './Components/About';
import TimeLine from './Components/TimeLine';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import MobileNav from './Components/MobileNav';
import { scrollToSection } from './lib/scrollUtils';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);



export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  // 🔹 SECTION REFS (Put in App.js)
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null)
  };


  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home', },
    { id: 'about', label: 'About', },
    { id: 'services', label: 'Services', },
    { id: 'portfolio', label: 'Portfolio', },
    { id: 'contact', label: 'Contact', }
  ];


  // 🔹 SCROLL FUNCTION (Put in App.js)
  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId, sectionRefs, setActiveSection, setIsScrolling);
  };

  // 🔹 INTERSECTION OBSERVER (Put in App.js)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      if (isScrolling) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [isScrolling]);

  // 🔹 HASH NAVIGATION (Put in App.js)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && sectionRefs[hash]) {
        handleScrollToSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    const initialHash = window.location.hash.substring(1);
    if (initialHash && sectionRefs[initialHash]) {
      setTimeout(() => handleScrollToSection(initialHash), 100);
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const main = useRef();
  const smoother = useRef();

  const scrollTo = () => {
    smoother.current.scrollTo('.box-c', true, 'center center');
  };

  useGSAP(
    () => {
      // create the smooth scroller FIRST!
      smoother.current = ScrollSmoother.create({
        smooth: 2, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      });
      ScrollTrigger.create({
        trigger: '.box-c',
        pin: true,
        start: 'center center',
        end: '+=300',
        markers: false,
      });
    },
    { scope: main }
  );
  return (
    <div id="smooth-wrapper" ref={main}>
      <div id="smooth-content">
        <MobileNav activeSection={activeSection} onNavClick={handleScrollToSection} />
        <SheetDemo />
        

         <div ref={sectionRefs.home} data-section="home" className='flex   flex-wrap  '>
           <div className='xl:w-1/3 w-full '>
            <PersonalCard></PersonalCard>
          </div>
          <div className='xl:w-2/3 w-full '>
            <Header activeSection={activeSection} onNavClick={handleScrollToSection}></Header>
          </div>
         </div>
          <div className='flex flex-wrap'>
            <div className='xl:w-1/3 w-full '>

          </div>
          <div className='xl:w-2/3 w-full'>
            <div className="container">
              <div ref={sectionRefs.about} data-section="about">
                <About />
              </div>
              <div ref={sectionRefs.services} data-section="services">
                <TimeLine />
              </div>
              <div ref={sectionRefs.portfolio} data-section="portfolio">
                <Skills />
                <Projects />
              </div>
              <div ref={sectionRefs.contact} data-section="contact" className="py-20">
                <h2 className="text-5xl font-light my-5">Get In <span className="text-main">Touch</span></h2>
                <div className="max-w-2xl">
                  <p className="text-brdr-color leading-relaxed mb-8">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                  </p>
                  <div className="flex flex-col gap-4">
                    <a href="mailto:your-email@example.com" className="flex items-center gap-3 text-main hover:text-white transition-colors">
                      <i className="fa-solid fa-envelope"></i>
                      <span>hagersamer21@gmail.com</span>
                    </a>
                    <a href="tel:+201150948602" className="flex items-center gap-3 text-main hover:text-white transition-colors">
                      <i className="fa-brands fa-whatsapp"></i>
                      <span>+201150948602</span>
                    </a>
                    <a href="https://www.linkedin.com/in/hajar-samer-19b529189/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-main hover:text-white transition-colors">
                      <i className="fa-brands fa-linkedin"></i>
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

      </div>
   
  )
}
