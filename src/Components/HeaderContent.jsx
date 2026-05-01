import gsap from "gsap";
import "./text-animation.css";
// LetterStagger.jsx
import { useRef, useEffect } from "react";



export default function HeaderContent({ text = "Say Hi from Hajar,Frontend  Developer", className = "text-[78px] font-light ", animationDuration = 3 }) {
  // store refs to each character node
  const charsRef = useRef([]);
  charsRef.current = []; // reset on render

  const addToRefs = (el) => {
    if (el && !charsRef.current.includes(el)) charsRef.current.push(el);
  };

  useEffect(() => {
    // animate from invisible -> visible with a small upward motion
    const ctx = gsap.context(() => {
      gsap.from(charsRef.current, {
        opacity: 0,
        y: 20,
        duration: animationDuration,
        stagger: 0.03,
        ease: "power3.out",
      });
    });

    return () => ctx.revert(); // clean up (kills animations and restores DOM)
  }, [text]);

  return (
    <span className={`letter-stagger  ${className}`} aria-label={text}>
      {Array.from(text).map((char, i) => {
        const display = char === " " ? "\u00A0" : char;

        // mark the substring "Hajar"
        if (char === ",") {
          return (
            <>
              <span ref={addToRefs}>,</span>
              <br />
            </>


          );
        }
        const hajarStart = text.indexOf("Hajar");
        const hajarEnd = hajarStart + "Hajar".length;

        const isHajar =
          i >= hajarStart && i < hajarEnd; // true if the char is in "Hajar"

        return (
          <span 
            key={i}
            className={`  char ${isHajar ? "text-main" : ""}`}
            ref={addToRefs}
            aria-hidden="true"
          >
            {display}
          </span>
        );
      })}
    </span>
  );



}
