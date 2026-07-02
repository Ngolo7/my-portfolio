    import { useState } from "react";
import Navbar from "./components/navBar";
import About from "./components/about";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Service from "./components/services";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
