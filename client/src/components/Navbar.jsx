import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const hideNavbar = location.pathname === "/" || location.pathname === "/login";

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/home", hash: "" },
    { name: "About Me", path: "/home", hash: "about" },
    { name: "Education", path: "/home", hash: "education" },
    { name: "Skills", path: "/home", hash: "skills" },
    { name: "Projects", path: "/home", hash: "projects" },
    { name: "Contact", path: "/home", hash: "contact" },
  ];

  const goToSection = (path, hash) => {
    handleLinkClick();
    if (location.pathname === path) {
      if (hash) {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate(hash ? `${path}#${hash}` : path);
    }
  };

  if (hideNavbar) {
    return null;
  }

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "var(--primary-color)",
        width: "100%",
        boxSizing: "border-box",
        zIndex: 1000,
      }}
      className="shadow-lg"
    >
      <div
        className="flex justify-center border-b"
        style={{ borderColor: "var(--border-color)", width: "100%", boxSizing: "border-box" }}
      >
        <div
          className="flex items-center justify-between py-3 px-4 sm:px-6"
          style={{ 
            width: "100%", 
            maxWidth: "1280px", 
            boxSizing: "border-box",
            margin: "0 auto",
            paddingRight: "30px" // Reduced right padding to shift buttons left
          }}
        >
          <div className="flex-shrink-0">
            <Link to="/home">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide cursor-pointer"
                  style={{ color: "var(--text-color)" }}>
                Portfolio
                <span style={{ color: "var(--secondary-color)" }}>.</span>
              </h1>
            </Link>
          </div>

          <ul 
            className="hidden md:flex items-center gap-4 lg:gap-6 font-medium"
            style={{ 
              color: "var(--text-color)",
              margin: 0,
              padding: 0,
              listStyle: "none",
              overflow: "hidden"
            }}
          >
            {navLinks.map((link) => (
              <li key={link.name} style={{ flexShrink: 0 }}>
                <button
                  onClick={() => goToSection(link.path, link.hash)}
                  className="transition duration-300 text-sm lg:text-base hover:text-[var(--secondary-color)] relative group bg-transparent border-none cursor-pointer whitespace-nowrap px-1"
                  style={{ color: "inherit" }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--secondary-color)] transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          <button 
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
                  style={{ backgroundColor: "var(--text-color)" }}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
                  style={{ backgroundColor: "var(--text-color)" }}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
                  style={{ backgroundColor: "var(--text-color)" }}></span>
          </button>
        </div>
      </div>

      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{ 
          backgroundColor: "var(--primary-color)", 
          width: "100%", 
          boxSizing: "border-box"
        }}
      >
        <div className="px-4 py-4 border-b" style={{ borderColor: "var(--border-color)" }}>
          <ul 
            className="flex flex-col items-center gap-4 font-medium"
            style={{ 
              color: "var(--text-color)",
              margin: 0,
              padding: 0,
              listStyle: "none"
            }}
          >
            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center">
                <button
                  onClick={() => goToSection(link.path, link.hash)}
                  className="block w-full py-2 px-4 transition duration-300 hover:text-[var(--secondary-color)] hover:bg-white/5 rounded-lg bg-transparent border-none cursor-pointer"
                  style={{ color: "inherit" }}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;