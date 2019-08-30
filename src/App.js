import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//components
import Header from "./components/Header"
import Footer from "./components/Footer"
//Pages
import HomePage from "./components/HomePage"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
//data
import { titles } from "./ResumeData"

function App() {
  return (
    <div>
      <Router>
        <Header titles={titles} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </Router>
    </div>
  )
}

export default App
