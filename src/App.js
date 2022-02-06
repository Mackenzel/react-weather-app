import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Search from "./Search";
import Body from "./Body";
import Sunformation from "./Sunformation";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Search />
      <Body />
      <Sunformation />
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
