import React, {useState} from "react";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import Technologia from "./components/Technologia";
import Navbar from "./components/Navbar";
import { InfoData, InfoDataTwo } from "./data/InfoData";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyle";
import Kontakt from "./components/Kontakt";
import Dizajn from "./components/Dizajn";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <Technologia {...InfoData} />
      <Dizajn/>
      {/* <Kontakt/> */}
      <Footer/>
    </>
  );
}

export default App;
