import React, { useState, useEffect } from "react";
import msdpImage from "../assets/msdp.png";
import barberImage from "../assets/barber.jpg";
import foodImage from "../assets/food.jpg";
import folloImage from "../assets/follo.jpg";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const projectsData = [
    {
      id: 1,
      title: "ML Disease Spread Predictor",
      image: msdpImage,
      description: "Healthcare platform for disease outbreak monitoring and forecasting using ML models.",
      link: "#"
    },
    {
      id: 2,
      title: "BarberConnect",
      image: barberImage,
      description: "Full-stack barber booking platform with Google Maps integration.",
      link: "#"
    },
    {
      id: 3,
      title: "FoodXpress",
      image: foodImage,
      description: "Android-based food delivery app with AI-powered recommendations.",
      link: "#"
    },
    {
      id: 4,
      title: "Follo (Social Media App)",
      image: folloImage,
      description: "Social networking platform with profile discovery and media sharing.",
      link: "#"
    }
  ];

  // Create circular array
  const extendedData = [...projectsData, ...projectsData, ...projectsData];
  const totalSlides = projectsData.length;

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Handle circular loop
  useEffect(() => {
    if (currentIndex === totalSlides * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalSlides);
      }, 500);
    } else if (currentIndex === totalSlides - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalSlides * 2 - 1);
      }, 500);
    } else {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, totalSlides]);

  return (
    <section
      id="projects"
      className="w-full py-16 px-4 sm:px-6 lg:px-8 relative flex justify-center"
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
             style={{ backgroundColor: "var(--secondary-color)" }}></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="h-14"></div>

        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: "var(--text-color)" }}>
            My <span style={{ color: "var(--secondary-color)" }}>Projects</span>
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 rounded-full"
               style={{ backgroundColor: "var(--secondary-color)" }}></div>
        </div>

        <div className="h-14"></div>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="flex-shrink-0 p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 mr-4"
            style={{
              backgroundColor: "var(--card-bg)",
              color: "var(--text-color)",
              border: "1px solid var(--border-color)",
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="flex-1 overflow-hidden">
            <div 
              className={`flex transition-transform duration-500 ease-in-out ${isTransitioning ? 'transition' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {extendedData.map((project, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-4">
                  <div className="rounded-xl overflow-hidden h-full flex flex-col"
                       style={{
                         backgroundColor: "#0d2818",
                         border: "1px solid #1a4a2e",
                         boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                       }}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-32 object-cover" 
                    />
                    <div className="p-4 flex-1 flex flex-col items-center text-center">
                      <h3 className="text-base font-bold" style={{ color: "#ffffff" }}>
                        {project.title}
                      </h3>
                      
                      <div className="h-1.5"></div>
                      
                      <p className="text-xs leading-relaxed flex-1" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                        {project.description}
                      </p>
                      
                      <div className="h-2.5"></div>
                      
                      <a href={project.link} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="inline-flex items-center gap-1 text-sm font-medium transition-all duration-300 hover:opacity-80"
                         style={{ color: "var(--secondary-color)" }}>
                        Explore →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="flex-shrink-0 p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 ml-4"
            style={{
              backgroundColor: "var(--card-bg)",
              color: "var(--text-color)",
              border: "1px solid var(--border-color)",
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="h-14"></div>
      </div>
    </section>
  );
}

export default Projects;