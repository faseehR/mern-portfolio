import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      <Signup />
      <Login />
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects  />
      <Skills />
      <Contact />
      
    </>
  );
}

export default App;