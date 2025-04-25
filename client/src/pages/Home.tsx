import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { useEffect } from "react";

export default function Home() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId as string);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Animation on scroll
  useEffect(() => {
    const animateOnScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up');
      
      animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.9) {
          (element as HTMLElement).style.opacity = '1';
          if ((element as HTMLElement).classList.contains('animate-slide-up')) {
            (element as HTMLElement).style.transform = 'translateY(0)';
          }
        }
      });
    };
    
    // Set initial styles for animated elements
    document.querySelectorAll('.animate-fade-in, .animate-slide-up').forEach(element => {
      (element as HTMLElement).style.opacity = '0';
      if ((element as HTMLElement).classList.contains('animate-slide-up')) {
        (element as HTMLElement).style.transform = 'translateY(20px)';
      }
      (element as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.5s ease';
    });
    
    // Run animation check on page load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on initial render
    
    return () => {
      window.removeEventListener('load', animateOnScroll);
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Achievements />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
