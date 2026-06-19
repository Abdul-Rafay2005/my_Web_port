import Header from "./components/Header";

import Hero from "./components/pages/Hero/Hero";
import About from "./components/pages/About/About";
import Project from "./components/pages/Project/Project";
import Achievements from "./components/pages/Achievements/Achievements";
import Certification from "./components/pages/Certificate/Certificate";
import Services from "./components/pages/Services/Services";
import Contact from "./components/pages/Contact/Contact";
import Footer from "./components/pages/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <Hero />
      <About />
      <Project />
      <Achievements/>
      <Certification />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
