import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Achievements from "./sections/Achievements";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";

function App() {
  return (
    <div className="bg-[#1E1B2E]">
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Education/>
      <Experience/>
      <Achievements/>
      <Projects/>
      <Certificates/>
    </div>
  );
}

export default App;