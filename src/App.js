import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scroll-up/ScrollUp";
const App = () => {
  return (
      <>
      <Header/>
          <main className="main">
              <Home />
              <About />
              <Qualification />
              <Skills />
              <Services />
              <Testimonials />
              <Contact />
          </main>
          <Footer />
          <ScrollUp/>
      </>
  )
}
export default App;
