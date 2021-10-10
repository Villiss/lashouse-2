import React, {useState} from "react";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyle";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from "./components/HomePage";
function App() {
  document.title = 'LASHOUSE'
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Router>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/kontakt' component={Kontakt} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
