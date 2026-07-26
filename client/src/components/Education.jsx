import React, { useState, useEffect } from "react";
import fastImage from "../assets/fast.png";
import pgcImage from "../assets/pgc.jpg";
import schoolImage from "../assets/tps.jpg";

function Education() {
  const educationData = [
    {
      id: 1,
      name: "FAST NUCES",
      location: "Lahore, Pakistan",
      batch: "2022 - 2026",
      degree: "BS Computer Science",
      cgpa: "CGPA: 2.6",
      image: fastImage,
      description: "Bachelor's in Computer Science with focus on Software Engineering, Data Science, and Artificial Intelligence."
    },
    {
      id: 2,
      name: "Punjab Group of Colleges",
      location: "Lahore, Pakistan",
      batch: "2020 - 2022",
      degree: "FSc Pre-Engineering",
      cgpa: "Marks: 945 | A+ Grade",
      image: pgcImage,
      description: "Completed Intermediate in Pre-Engineering with distinction."
    },
    {
      id: 3,
      name: "The Punjab School",
      location: "Lahore, Pakistan",
      batch: "2009 - 2019",
      degree: "Matriculation",
      cgpa: "Marks: 1046 | A+ Grade",
      image: schoolImage,
      description: "Completed Matriculation with excellent academic performance."
    }
  ];

  const totalSlides = educationData.length;
  const extendedData = [...educationData, ...educationData, ...educationData];

  // How many cards are visible at once — responsive
  const [itemsPerView, setItemsPerView] = useState(3);
  const [gapPx, setGapPx] = useState(32);
  useEffect(() => {
    const updateItemsPerView = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setItemsPerView(1);
        setGapPx(16);
      } else if (w < 1024) {
        setItemsPerView(2);
        setGapPx(24);
      } else {
        setItemsPerView(3);
        setGapPx(32);
      }
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Start in the middle copy so wrap-around works in both directions
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
    } else if (currentIndex === totalSlides - 1) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex + totalSlides);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, totalSlides]);

  // Re-enable smooth transition on the next tick after a silent jump
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => setIsTransitioning(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  const slideWidth = 100 / itemsPerView;

  return (
    <section
      id="education"
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
            My <span style={{ color: "var(--secondary-color)" }}>Education</span>
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 rounded-full"
               style={{ backgroundColor: "var(--secondary-color)" }}></div>
        </div>

        <div className="h-14"></div>

        <div className="relative flex items-center justify-center gap-4 sm:gap-8 lg:gap-12">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="flex-shrink-0 p-3 rounded-full transition-all duration-300 hover:scale-110 z-20"
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
              {extendedData.map((edu, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{
                    width: `calc(${slideWidth}% - ${gapPx}px)`,
                    marginRight: `${gapPx}px`,
                  }}
                >
                  <div
                    className="rounded-xl overflow-hidden h-full flex flex-col"
                    style={{
                      backgroundColor: "#0d2818",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.45)",
                      minHeight: "360px",
                    }}
                  >
                    <img
                      src={edu.image}
                      alt={edu.name}
                      className="w-full h-32 object-cover flex-shrink-0"
                    />
                    <div className="p-4 text-center flex flex-col flex-1">
                      <h3 className="text-base font-bold" style={{ color: "#ffffff" }}>
                        {edu.name}
                      </h3>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                        {edu.location}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                        {edu.batch}
                      </p>

                      <div className="h-1.5"></div>

                      <p className="text-sm font-semibold" style={{ color: "var(--text-color)" }}>
                        {edu.degree}
                      </p>
                      <p className="text-sm mt-0.5" style={{ color: "#ffffff" }}>
                        {edu.cgpa}
                      </p>

                      <div className="h-1.5"></div>

                      <p
                        className="text-xs leading-relaxed"
                        style={{
                          color: "rgba(255, 255, 255, 0.7)",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="flex-shrink-0 p-3 rounded-full transition-all duration-300 hover:scale-110 z-20"
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

export default Education;