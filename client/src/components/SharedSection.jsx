import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function SharedSections() {
  return (
    <>
      <About />
      
      <div className="h-20"></div>
      
      <Education />
      
      <div className="h-20"></div>
      
      <Skills />
      
      <div className="h-20"></div>
      
      <Projects />
      
      <div className="h-20"></div>
      
      <Contact />
    </>
  );
}