import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Results from "./Results";
import requests from "./requests";
function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="App">
      <Header />
      <Navbar setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
