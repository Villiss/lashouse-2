import React, {useState} from "react";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyle";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
function App() {
  document.title = 'LASHOUSE'
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <HomePage/>
      <Kontakt/>
      <Footer/>
    </>
  );
}

export default App;
