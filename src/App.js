import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Lodding from "./Components/Lodding";
import Protfolio from "./Components/Protfolio";
import Service from "./Components/Service";
import Team from "./Components/Team";
import Testimonial from "./Components/Testimonial";
import WhyChooseUs from "./Components/WhyChooseUs";

function App() {
  const [showLodding, setshowLodding] = useState(true);

  setTimeout(() => {
    setshowLodding(false);
  }, 2500);

  return (
    <div className="w-full h-full ">
            {showLodding ? (
        <Lodding />
      ) : (
      <div className="w-full h-full">
        <Home />
      <About />
      <Service/>
      <WhyChooseUs/>
      <Team />
      <Protfolio/>
      <Testimonial />
      <Contact />
      <Footer />
      </div>
      )}
    </div>
  );
}

export default App;
