import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative"
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
             style={{ backgroundColor: "var(--secondary-color)" }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: "var(--text-color)" }}>
            Contact <span style={{ color: "var(--secondary-color)" }}>Me</span>
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 rounded-full"
               style={{ backgroundColor: "var(--secondary-color)" }}></div>
          <p className="mt-4 text-lg" style={{ color: "var(--text-secondary)" }}>
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl"
                 style={{
                   backgroundColor: "var(--card-bg)",
                   border: "1px solid var(--border-color)",
                 }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: "var(--text-color)" }}>
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaEnvelope size={20} style={{ color: "var(--secondary-color)" }} />
                  <span style={{ color: "var(--text-color)" }}>faseeh.rahman321@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone size={20} style={{ color: "var(--secondary-color)" }} />
                  <span style={{ color: "var(--text-color)" }}>+92 301 1237288</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaLinkedin size={20} style={{ color: "var(--secondary-color)" }} />
                  <a href="https://www.linkedin.com/in/faseeh-rahman321" 
                     target="_blank" rel="noopener noreferrer"
                     style={{ color: "var(--text-color)" }}
                     className="hover:text-[var(--secondary-color)] transition-colors">
                    linkedin.com/in/faseeh-rahman321
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaGithub size={20} style={{ color: "var(--secondary-color)" }} />
                  <a href="https://github.com/faseehR" 
                     target="_blank" rel="noopener noreferrer"
                     style={{ color: "var(--text-color)" }}
                     className="hover:text-[var(--secondary-color)] transition-colors">
                    github.com/faseehR
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 rounded-xl"
               style={{
                 backgroundColor: "var(--card-bg)",
                 border: "1px solid var(--border-color)",
               }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: "var(--text-color)" }}>
              Send Me a Message
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-color)" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]"
                  style={{
                    backgroundColor: "var(--primary-color)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-color)",
                  }}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-color)" }}>
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]"
                  style={{
                    backgroundColor: "var(--primary-color)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-color)",
                  }}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-color)" }}>
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]"
                  style={{
                    backgroundColor: "var(--primary-color)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-color)",
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-80 hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--secondary-color)",
                  color: "var(--primary-color)",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;