import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaPaperPlane, FaArrowUp } from "react-icons/fa";

function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative"
      style={{ backgroundColor: "#0d2818" }}
    >
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: "var(--text-color)" }}>
            Contact <span style={{ color: "var(--secondary-color)" }}>Me</span>
          </h2>
        </div>
         <div className="h-24"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <FaPhone size={16} style={{ color: "var(--text-color)" }} />
              <span
                className="tracking-wide"
                style={{ color: "var(--text-color)" }}
              >
                +92 301 1237288
              </span>
            </div>

            <div>
              <div className="flex items-center gap-3 pb-4"
                   style={{ borderBottom: "1px solid var(--border-color)" }}>
                <FaEnvelope size={16} style={{ color: "var(--text-color)" }} />
                <a
                  href="mailto:faseeh.rahman321@gmail.com"
                  className="tracking-wide hover:opacity-80 transition-opacity"
                  style={{ color: "var(--text-color)" }}
                >
                  faseeh.rahman321@gmail.com
                </a>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 pb-4"
                   style={{ borderBottom: "1px solid var(--border-color)" }}>
                <a
                  href="https://www.linkedin.com/in/faseeh-rahman321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: "var(--card-bg)" }}
                >
                  <FaLinkedin size={18} style={{ color: "var(--text-color)" }} />
                </a>
                <a
                  href="https://github.com/faseehR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: "var(--card-bg)" }}
                >
                  <FaGithub size={18} style={{ color: "var(--text-color)" }} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-1 focus:ring-[var(--secondary-color)] placeholder:text-sm placeholder:text-gray-500"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "var(--secondary-color)",
                  color: "#000000",
                }}
              />
              <input
                type="email"
                placeholder="E-Mail"
                className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-1 focus:ring-[var(--secondary-color)] placeholder:text-sm placeholder:text-gray-500"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "var(--secondary-color)",
                  color: "#000000",
                }}
              />
              <textarea
                rows="6"
                placeholder="Message"
                className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-1 focus:ring-[var(--secondary-color)] placeholder:text-sm placeholder:text-gray-500 resize-y"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "var(--secondary-color)",
                  color: "#000000",
                }}
              />
              <button
                type="submit"
                className="w-full py-3 rounded-md font-medium transition-all duration-300 hover:opacity-80 hover:scale-[1.02] flex items-center justify-center gap-2"
                style={{
                  backgroundColor: "#eeeeee",
                  color: "#111111",
                }}
              >
                <FaPaperPlane size={14} />
                Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-30"
        style={{
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--border-color)",
        }}
      >
        <FaArrowUp size={16} style={{ color: "var(--text-color)" }} />
      </button>
    </section>
  );
}

export default Contact;