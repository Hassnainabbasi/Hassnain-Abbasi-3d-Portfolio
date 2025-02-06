import {
  Hero,
  Tech,
  Works,
  About,
  Navbar,
  Contact,
  Programs,
  // Feedbacks,
  Experience,
  StarsCanvas,
} from "./components/index.ts";
import { Element } from "react-scroll";
import { BsArrowUp } from "react-icons/bs";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "./components/DarkModeProvider.tsx";

const App = () => {
  const { isDark } = useContext(DarkModeContext);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <ToastContainer
        draggable
        newestOnTop
        rtl={false}
        autoClose={5000}
        closeOnClick={false}
        pauseOnHover={false}
        hideProgressBar={true}
        position="bottom-center"
        theme={isDark ? "dark" : "light"}
      />
      <div className="relative z-0 bg-cover bg-no-repeat bg-center bg-white bg-hero-gradient-light dark:bg-c-black dark:bg-hero-gradient-dark">
        <Element name="home">
          <div>
            <Navbar />
            <Hero />
          </div>
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="tech">
          <Tech />
        </Element>
        <Element name="projects">
          <Works />
        </Element>
        <Element name="education">
          <Programs />
        </Element>
        <Element name="contact">
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </Element>
      </div>

      {showBackToTop && (
        <button
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex justify-center items-center shadow cursor-pointer backToTop bg-c-white dark:bg-secondary text-c-black dark:text-white"
          onClick={handleBackToTop}
        >
          <BsArrowUp />
        </button>
      )}
    </BrowserRouter>
  );
};

export default App;
