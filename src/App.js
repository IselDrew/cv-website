import React from "react";

//components
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { titles } from "./navbarElements";

function App() {
  return (
    <div>
      <h1>Andrew's WebSite</h1>
      <Header titles={titles} />
      {/* <HomePage /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
