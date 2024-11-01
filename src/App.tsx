import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}

export default App;
