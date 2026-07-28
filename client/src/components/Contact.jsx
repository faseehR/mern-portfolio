import React, { useState } from "react";
import axios from "axios";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaArrowUp,
} from "react-icons/fa";

function Contact() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "https://task3backendportfolio.vercel.app/api/contact",
        {
          name,
          email,
          subject,
          message,
        }
      );

      alert(response.data.message);

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Unable to connect to backend.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative"
      style={{ backgroundColor: "#0d2818" }}
    >
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ color: "var(--text-color)" }}
          >
            Contact{" "}
            <span style={{ color: "var(--secondary-color)" }}>
              Me
            </span>
          </h2>
        </div>

        <div className="h-24"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info */}

          <div className="flex flex-col gap-6">

            <div className="flex items-center gap-3">
              <FaPhone
                size={16}
                style={{ color: "var(--text-color)" }}
              />
              <span
                className="tracking-wide"
                style={{ color: "var(--text-color)" }}
              >
                +92 301 1237288
              </span>
            </div>

            <div>
              <div
                className="flex items-center gap-3 pb-4"
                style={{
                  borderBottom:
                    "1px solid var(--border-color)",
                }}
              >
                <FaEnvelope
                  size={16}
                  style={{ color: "var(--text-color)" }}
                />

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
              <div
                className="flex items-center gap-4 pb-4"
                style={{
                  borderBottom:
                    "1px solid var(--border-color)",
                }}
              >
                <a
                  href="https://www.linkedin.com/in/faseeh-rahman321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: "var(--card-bg)",
                  }}
                >
                  <FaLinkedin
                    size={18}
                    style={{
                      color: "var(--text-color)",
                    }}
                  />
                </a>

                <a
                  href="https://github.com/faseehR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: "var(--card-bg)",
                  }}
                >
                  <FaGithub
                    size={18}
                    style={{
                      color: "var(--text-color)",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
                    {/* Contact Form */}

          <div>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >

              {/* Name */}

              <div className="flex flex-col gap-0">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium tracking-wide mb-0"
                  style={{ color: "#ffffff" }}
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-1 focus:ring-[var(--secondary-color)] placeholder:text-sm placeholder:text-gray-500"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "var(--secondary-color)",
                    color: "#000000",
                  }}
                />
              </div>

              {/* Email */}

              <div className="flex flex-col gap-0">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium tracking-wide mb-0"
                  style={{ color: "#ffffff" }}
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  placeholder="E-Mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-1 focus:ring-[var(--secondary-color)] placeholder:text-sm placeholder:text-gray-500"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "var(--secondary-color)",
                    color: "#000000",
                  }}
                />
              </div>

              {/* Subject */}

              <div className="flex flex-col gap-0">
                <label
                  htmlFor="contact-subject"
                  className="text-sm font-medium tracking-wide mb-0"
                  style={{ color: "#ffffff" }}
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-1 focus:ring-[var(--secondary-color)] placeholder:text-sm placeholder:text-gray-500"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "var(--secondary-color)",
                    color: "#000000",
                  }}
                />
              </div>

              {/* Message */}

              <div className="flex flex-col gap-0">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium tracking-wide mb-0"
                  style={{ color: "#ffffff" }}
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  rows="6"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-1 focus:ring-[var(--secondary-color)] placeholder:text-sm placeholder:text-gray-500 resize-y"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "var(--secondary-color)",
                    color: "#000000",
                  }}
                />
              </div>
                            {/* Submit Button */}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-md font-medium transition-all duration-300 hover:opacity-80 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "#eeeeee",
                  color: "#111111",
                }}
              >
                <FaPaperPlane size={14} />

                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

        </div>

      </div>
            {/* Scroll to Top */}

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-30"
        style={{
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--border-color)",
        }}
      >
        <FaArrowUp
          size={16}
          style={{ color: "var(--text-color)" }}
        />
      </button>

    </section>
  );
}

export default Contact;