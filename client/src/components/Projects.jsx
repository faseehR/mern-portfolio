import React, { useState, useEffect } from "react";
import msdpImage from "../assets/msdp.png";
import barberImage from "../assets/barber.jpg";
import foodImage from "../assets/food.jpg";
import folloImage from "../assets/follo.jpg";

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Restaurant Website",
      image: msdpImage,
      description: "A dynamic and responsive restaurant website showing a menu, online reservations, customer reviews, and contact information.",
      link: "https://github.com/ali08642/MSDP"
    },
    {
      id: 2,
      title: "Chess image recognizer",
      image: barberImage,
      description: "An AI-powered chess system that recognizes physical pieces and plays autonomously using computer vision and advanced game algorithms.",
      link: "https://github.com/faseehR/Barber-Connect-Website"
    },
    {
      id: 3,
      title: "Gesture Snake Game",
      image: foodImage,
      description: "An innovative twist on the classic snake game, allowing players to control the snake's movements through hand gestures.",
      link: "https://github.com/faseehR/Android-Food-Delivery-App"
    },
    {
      id: 4,
      title: "WiseWay",
      image: folloImage,
      description: "A web application that uses advanced algorithms to calculate the most cost-effective route between two points.",
      link: "https://github.com/shariqmunir99/Follo-fe"
    }
  ];

  const totalSlides = projectsData.length;
  const extendedData = [...projectsData, ...projectsData, ...projectsData];

  // How many cards are visible at once — responsive
  const [itemsPerView, setItemsPerView] = useState(4);
  useEffect(() => {
    const updateItemsPerView = () => {
      const w = window.innerWidth;
      if (w < 640) setItemsPerView(1);
      else if (w < 1024) setItemsPerView(2);
      else setItemsPerView(4);
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // IMPORTANT: start in the middle copy so wrap-around works both directions
  const [currentIndex, setCurrentIndex] = useState(totalSlides);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (currentIndex >= totalSlides * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex - totalSlides);
      }, 500);
      return () => clearTimeout(timer);
    } else if (currentIndex < totalSlides - 1 + 1 && currentIndex === totalSlides - 1) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex + totalSlides);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, totalSlides]);

  // Re-enable transition on the next tick after a silent jump
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => setIsTransitioning(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  const slideWidth = 100 / itemsPerView;

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

        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: "var(--text-color)" }}>
            My <span style={{ color: "var(--secondary-color)" }}>Projects</span>
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 rounded-full"
               style={{ backgroundColor: "var(--secondary-color)" }}></div>
        </div>

        <div className="h-10"></div>

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
              className="flex"
              style={{
                transform: `translateX(-${currentIndex * slideWidth}%)`,
                transition: isTransitioning ? "transform 500ms ease-in-out" : "none",
              }}
            >
              {extendedData.map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-5"
                  style={{ width: `${slideWidth}%` }}
                >
                  <div
                    className="rounded-xl overflow-hidden h-full flex flex-col"
                    style={{
                      backgroundColor: "#0d2818",
                      border: "1px solid #1a4a2e",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                      minHeight: "340px",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover flex-shrink-0"
                    />
                    <div className="p-5 flex flex-col text-center">
                      <h3 className="text-lg font-bold mb-2" style={{ color: "#ffffff" }}>
                        {project.title}
                      </h3>

                      <p
                        className="text-xs leading-relaxed"
                        style={{
                          color: "rgba(255, 255, 255, 0.7)",
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {project.description}
                      </p>

                      <div className="mt-3">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium transition-all duration-300 hover:opacity-80"
                          style={{ color: "var(--secondary-color)" }}
                        >
                          Explore →
                        </a>
                      </div>
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