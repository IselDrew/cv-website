import React from "react"
// import { BrowserRouter as Router, Route } from "react-router-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"

//components
import Header from "./components/Header"
import Footer from "./components/Footer"
//Pages
import HomePage from "./components/HomePage"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
//data
import { titles } from "./data"

function App() {
  return (
    <div className="whole-page">
      <Router>
        <Header titles={titles} />
        <Route exact path={process.env.PUBLIC_URL + "/"} component={HomePage} />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/about"}
          component={About}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/projects"}
          component={Projects}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/contact"}
          component={Contact}
        />
        <Footer />
      </Router>
    </div>
  )
}

export default App
