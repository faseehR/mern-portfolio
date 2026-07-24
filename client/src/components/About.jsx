import React from "react";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative"
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
             style={{ backgroundColor: "var(--secondary-color)" }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: "var(--text-color)" }}>
            About <span style={{ color: "var(--secondary-color)" }}>Me</span>
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 rounded-full"
               style={{ backgroundColor: "var(--secondary-color)" }}></div>
        </div>

        <div className="text-center">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6"
             style={{ color: "var(--text-color)" }}>
            I'm a final-year CS student with hands-on experience building full-stack web and mobile applications using technologies such as <span style={{ color: "var(--secondary-color)" }}>React.js</span>, <span style={{ color: "var(--secondary-color)" }}>Next.js</span>, <span style={{ color: "var(--secondary-color)" }}>Django REST</span>, <span style={{ color: "var(--secondary-color)" }}>Node.js</span>, <span style={{ color: "var(--secondary-color)" }}>Python</span>, and <span style={{ color: "var(--secondary-color)" }}>SQL</span>.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6"
             style={{ color: "var(--text-color)" }}>
            Proven track record of developing end-to-end solutions from database design and RESTful APIs to AI integrations and responsive user interfaces. Eager to create <span style={{ color: "var(--secondary-color)" }}>intelligent</span> and <span style={{ color: "var(--secondary-color)" }}>scalable solutions</span> for real-world problems.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed"
             style={{ color: "var(--text-color)" }}>
            I am deeply committed to leveraging my skills in both web development and artificial intelligence to build innovative applications that make a meaningful impact on people's lives.
          </p>
        </div>

        <div className="h-10"></div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center p-4 rounded-xl"
               style={{
                 backgroundColor: "var(--card-bg)",
                 border: "1px solid var(--border-color)",
               }}>
            <div className="text-3xl sm:text-4xl font-bold"
                 style={{ color: "var(--secondary-color)" }}>2+</div>
            <div className="text-sm sm:text-base mt-1"
                 style={{ color: "var(--text-secondary)" }}>Years Experience</div>
          </div>
          <div className="text-center p-4 rounded-xl"
               style={{
                 backgroundColor: "var(--card-bg)",
                 border: "1px solid var(--border-color)",
               }}>
            <div className="text-3xl sm:text-4xl font-bold"
                 style={{ color: "var(--secondary-color)" }}>10+</div>
            <div className="text-sm sm:text-base mt-1"
                 style={{ color: "var(--text-secondary)" }}>Projects Completed</div>
          </div>
          <div className="text-center p-4 rounded-xl"
               style={{
                 backgroundColor: "var(--card-bg)",
                 border: "1px solid var(--border-color)",
               }}>
            <div className="text-3xl sm:text-4xl font-bold"
                 style={{ color: "var(--secondary-color)" }}>5+</div>
            <div className="text-sm sm:text-base mt-1"
                 style={{ color: "var(--text-secondary)" }}>Technologies</div>
          </div>
          <div className="text-center p-4 rounded-xl"
               style={{
                 backgroundColor: "var(--card-bg)",
                 border: "1px solid var(--border-color)",
               }}>
            <div className="text-3xl sm:text-4xl font-bold"
                 style={{ color: "var(--secondary-color)" }}>100%</div>
            <div className="text-sm sm:text-base mt-1"
                 style={{ color: "var(--text-secondary)" }}>Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;