import React from "react";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Experience from "./pages/Experience";
import Projects from "./pages/Project";

import ScrollToTop from "./pages/ScrollTop";

const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Hero />
      <Experience />
      <Projects />
    </div>
  );
};

export default App;
