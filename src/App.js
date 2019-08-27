import React from "react";

//components
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { titles, paragraphs } from "./Elements";

function App() {
  return (
    <div>
      <Header titles={titles} />
      <HomePage paragraphs={paragraphs} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
