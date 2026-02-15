import React, { Suspense, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Background from "./components/Background";
import Lenis from "lenis";

const Loading = () => (
   <div className="h-screen w-full flex items-center justify-center bg-black text-white font-bold text-2xl animate-pulse">
    Loading Experience...
  </div>
);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
       duration: 1.2,
       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
       direction: 'vertical',
       gestureDirection: 'vertical',
       smooth: true,
       mouseMultiplier: 1,
       smoothTouch: false,
       touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative text-white font-sans antialiased overflow-x-hidden selection:bg-cyan-500 selection:text-black min-h-screen">
      <Suspense fallback={<Loading />}>
        {/* Background Layer */}
        <Background />

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col items-center w-full">
          <Navbar />
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
