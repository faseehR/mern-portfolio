import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/#about" },
    { name: "Education", href: "/#education" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  if (hideNavbar) {
    return null;
  }

  return (
    <nav
     className="fixed top-0 left-0 w-full shadow-lg z-50"
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 py-3 flex justify-center border-b"
           style={{ borderColor: "var(--border-color)" }}>
        <div className="w-full max-w-7xl flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide cursor-pointer"
                  style={{ color: "var(--text-color)" }}>
                Portfolio
                <span style={{ color: "var(--secondary-color)" }}>.</span>
              </h1>
            </Link>
          </div>

          <ul className="hidden md:flex items-center gap-6 lg:gap-8 font-medium"
              style={{ color: "var(--text-color)" }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}
                   className="transition duration-300 text-sm lg:text-base hover:text-[var(--secondary-color)] relative group">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--secondary-color)] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Link to="/login"
                  className="px-4 lg:px-5 py-1.5 lg:py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm lg:text-base font-medium whitespace-nowrap"
                  style={{ backgroundColor: "var(--secondary-color)", color: "var(--text-color)" }}>
              Login
            </Link>
            <Link to="/signup"
                  className="px-4 lg:px-5 py-1.5 lg:py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm lg:text-base font-medium whitespace-nowrap"
                  style={{ backgroundColor: "var(--secondary-color)", color: "var(--text-color)" }}>
              Sign Up
            </Link>
          </div>

          <button className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition"
                  onClick={() => setIsOpen(!isOpen)}>
            <span className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
                  style={{ backgroundColor: "var(--text-color)" }}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
                  style={{ backgroundColor: "var(--text-color)" }}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
                  style={{ backgroundColor: "var(--text-color)" }}></span>
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
           style={{ backgroundColor: "var(--primary-color)" }}>
        <div className="px-4 py-4 border-b" style={{ borderColor: "var(--border-color)" }}>
          <ul className="flex flex-col items-center gap-4 font-medium"
              style={{ color: "var(--text-color)" }}>
            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center">
                <a href={link.href}
                   className="block py-2 px-4 transition duration-300 hover:text-[var(--secondary-color)] hover:bg-white/5 rounded-lg"
                   onClick={handleLinkClick}>
                  {link.name}
                </a>
              </li>
            ))}
            <li className="w-full mt-2 pt-4 border-t" style={{ borderColor: "var(--border-color)" }}>
              <div className="flex gap-3 w-full">
                <Link to="/login"
                      className="flex-1 px-4 py-2 rounded-lg transition duration-300 text-sm font-medium hover:opacity-80 text-center"
                      style={{ backgroundColor: "var(--secondary-color)", color: "var(--text-color)" }}
                      onClick={handleLinkClick}>
                  Login
                </Link>
                <Link to="/signup"
                      className="flex-1 px-4 py-2 rounded-lg transition duration-300 text-sm font-medium hover:opacity-80 text-center"
                      style={{ backgroundColor: "var(--secondary-color)", color: "var(--text-color)" }}
                      onClick={handleLinkClick}>
                  Sign Up
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;