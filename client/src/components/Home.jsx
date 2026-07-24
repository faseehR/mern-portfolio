import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import SharedSection from "./SharedSection";
import profileImage from "../assets/picture.jpg";
import resumeImage from "../assets/resume.png";

function Home() {
  const [showResume, setShowResume] = useState(false);
  
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/faseeh-rahman321",
    github: "https://github.com/faseehR",
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
        style={{ 
          backgroundColor: "var(--primary-color)",
          paddingLeft: "clamp(1rem, 5vw, 4rem)",
          paddingRight: "clamp(1rem, 5vw, 4rem)",
        }}
      >
        <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full blur-3xl"
               style={{ backgroundColor: "var(--secondary-color)" }}></div>
          <div className="absolute bottom-0 left-0 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] rounded-full blur-3xl"
               style={{ backgroundColor: "var(--secondary-color)" }}></div>
        </div>

        <div className="w-full max-w-7xl mx-auto py-12 sm:py-16 md:py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left w-full">
              <p className="text-sm sm:text-base md:text-lg mb-1" style={{ color: "var(--text-secondary)" }}>
                Hey! It's Me
              </p>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-3 break-words"
                  style={{ color: "var(--text-color)" }}>
                Faseeh-ur-Rehman
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-5"
                 style={{ color: "var(--secondary-color)" }}>
                MERN Stack Developer & AI Engineer
              </p>

              <div className="h-10"></div>

              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href={socialLinks.linkedin}
                  className="p-2.5 sm:p-3 rounded-lg transition-colors duration-300 hover:border-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)]"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    color: "var(--text-color)",
                    border: "1px solid var(--border-color)",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} className="sm:w-7 sm:h-7" />
                </a>
                <a
                  href={socialLinks.github}
                  className="p-2.5 sm:p-3 rounded-lg transition-colors duration-300 hover:border-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)]"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    color: "var(--text-color)",
                    border: "1px solid var(--border-color)",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={24} className="sm:w-7 sm:h-7" />
                </a>
              </div>

              <div className="h-10"></div>

              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setShowResume(true)}
                  className="px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg font-medium transition-all duration-300 hover:opacity-80 hover:scale-105"
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    color: "var(--primary-color)",
                    border: "none",
                    boxShadow: "0 4px 6px rgba(0, 255, 136, 0.3)",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                  }}
                >
                  View Resume
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-center w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]">
              <div className="relative w-full">
                <div className="relative aspect-square rounded-full overflow-hidden border-4"
                     style={{ borderColor: "var(--secondary-color)" }}>
                  <img
                    src={profileImage}
                    alt="Faseeh-ur-Rehman"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Section - Links to all pages */}
      <SharedSection />

      {/* Resume Modal */}
      {showResume && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
          onClick={() => setShowResume(false)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl"
            style={{
              backgroundColor: "var(--primary-color)",
              border: "2px solid var(--border-color)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-3 right-3 z-10 p-2.5 rounded-full transition-colors duration-300 hover:bg-white/20"
              style={{ 
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "var(--text-color)",
                border: "1px solid var(--border-color)",
              }}
            >
              <FaTimes size={20} />
            </button>
            
            <img
              src={resumeImage}
              alt="Resume"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;