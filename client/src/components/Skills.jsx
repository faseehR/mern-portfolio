import React from "react";
import { FaPython, FaJs, FaJava, FaDatabase, FaPhp, FaReact, FaNodeJs, FaMobile, FaBrain } from "react-icons/fa";
import { SiCplusplus, SiNextdotjs, SiExpress, SiDjango, SiFastapi, SiTailwindcss, SiTensorflow, SiPytorch, SiFirebase, SiSupabase } from "react-icons/si";

function Skills() {
  const languages = [
    { name: "Python", icon: <FaPython size={35} /> },
    { name: "JavaScript", icon: <FaJs size={35} /> },
    { name: "Java", icon: <FaJava size={35} /> },
    { name: "C++", icon: <SiCplusplus size={35} /> },
    { name: "SQL", icon: <FaDatabase size={35} /> },
    { name: "PHP", icon: <FaPhp size={35} /> },
  ];

  const frameworks = [
    { name: "React.js", icon: <FaReact size={35} /> },
    { name: "Next.js", icon: <SiNextdotjs size={35} /> },
    { name: "Node.js", icon: <FaNodeJs size={35} /> },
    { name: "Express.js", icon: <SiExpress size={35} /> },
    { name: "Django REST", icon: <SiDjango size={35} /> },
    { name: "FastAPI", icon: <SiFastapi size={35} /> },
    { name: "React Native", icon: <FaMobile size={35} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={35} /> },
  ];

  const aiTools = [
    { name: "TensorFlow", icon: <SiTensorflow size={35} /> },
    { name: "PyTorch", icon: <SiPytorch size={35} /> },
    { name: "OpenAI API", icon: <FaBrain size={35} /> },
    { name: "Firebase", icon: <SiFirebase size={35} /> },
    { name: "Supabase", icon: <SiSupabase size={35} /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative"
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
             style={{ backgroundColor: "var(--secondary-color)" }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: "var(--text-color)" }}>
            My <span style={{ color: "var(--secondary-color)" }}>Skills</span>
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 rounded-full"
               style={{ backgroundColor: "var(--secondary-color)" }}></div>
        </div>

        {/* Languages */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-center mb-6" style={{ color: "var(--text-color)" }}>
            Programming <span style={{ color: "var(--secondary-color)" }}>Languages</span>
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {languages.map((skill) => (
              <div key={skill.name} className="p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                   style={{
                     backgroundColor: "var(--card-bg)",
                     border: "1px solid var(--border-color)",
                   }}>
                <div className="flex justify-center" style={{ color: "var(--secondary-color)" }}>
                  {skill.icon}
                </div>
                <p className="mt-2 text-sm font-medium" style={{ color: "var(--text-color)" }}>
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-center mb-6" style={{ color: "var(--text-color)" }}>
            Frameworks & <span style={{ color: "var(--secondary-color)" }}>Libraries</span>
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {frameworks.map((skill) => (
              <div key={skill.name} className="p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                   style={{
                     backgroundColor: "var(--card-bg)",
                     border: "1px solid var(--border-color)",
                   }}>
                <div className="flex justify-center" style={{ color: "var(--secondary-color)" }}>
                  {skill.icon}
                </div>
                <p className="mt-2 text-sm font-medium" style={{ color: "var(--text-color)" }}>
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* AI & Tools */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-6" style={{ color: "var(--text-color)" }}>
            AI & <span style={{ color: "var(--secondary-color)" }}>Tools</span>
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {aiTools.map((skill) => (
              <div key={skill.name} className="p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                   style={{
                     backgroundColor: "var(--card-bg)",
                     border: "1px solid var(--border-color)",
                   }}>
                <div className="flex justify-center" style={{ color: "var(--secondary-color)" }}>
                  {skill.icon}
                </div>
                <p className="mt-2 text-sm font-medium" style={{ color: "var(--text-color)" }}>
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;