// Scroll utility functions for smooth navigation

export const scrollToSection = (sectionId, sectionRefs, setActiveSection, setIsScrolling) => {
  const targetRef = sectionRefs[sectionId];
  
  if (!targetRef || !targetRef.current) {
    console.warn(`Section ref for ${sectionId} not found`);
    return;
  }

  setIsScrolling(true);
  
  // Smooth scroll to the target section with offset to keep previous content visible
  const elementTop = targetRef.current.offsetTop;
  const offsetPosition = elementTop - 100; // 100px offset from top
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });

  // Update active section immediately
  setActiveSection(sectionId);

  // Reset scrolling flag after animation completes
  setTimeout(() => {
    setIsScrolling(false);
  }, 1000); // Adjust timing based on your scroll duration
};

// Alternative scroll function using GSAP if you prefer
export const scrollToSectionGSAP = (sectionId, sectionRefs, setActiveSection, setIsScrolling) => {
  const targetRef = sectionRefs[sectionId];
  
  if (!targetRef || !targetRef.current) {
    console.warn(`Section ref for ${sectionId} not found`);
    return;
  }

  setIsScrolling(true);
  setActiveSection(sectionId);

  // Use GSAP for smooth scrolling with offset to keep previous content visible
  gsap.to(window, {
    duration: 1.5,
    scrollTo: {
      y: targetRef.current,
      offsetY: 100 // 100px offset from top to keep previous content visible
    },
    ease: "power2.inOut",
    onComplete: () => {
      setIsScrolling(false);
    }
  });
};

