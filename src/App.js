import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <br></br><br></br><br></br><br></br>
      *Landing page in progress, update on: 08/26/2024*
      <Home path="/"/>
      <About path="/about"/>
      <Work path="/work" />
      {/* <Testimonial /> */}
      <Contact path="/contact"/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
