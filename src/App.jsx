import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";

function App() {
  return (
    <div className="bg-[#1E1B2E]">
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Education/>
    </div>
  );
}

export default App;