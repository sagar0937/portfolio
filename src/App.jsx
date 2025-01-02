import React from "react";
// import Navbar from "./components/Navbar";
import AboutPage from "./components/About";
// import Hero from "./components/Hero";
import Work from "./components/Work";
import Companies from "./components/Company";
import Hero from "./pages/Hero";
import Experience from "./pages/Experience";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import TechStack from "./pages/TechStack";
import ScrollToTop from "./pages/ScrollTop";
import Technologies from "./pages/Technologies";
import Navbar from "./pages/Navbar";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <AboutPage />
      <Work />
      <Companies /> */}
      <Navbar />
      <ScrollToTop />
      <Hero />
      {/* <Technologies /> */}
      {/* <TechStack /> */}
      <Experience />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
};

export default App;
