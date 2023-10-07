import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather</h1>
      <Weather />
      <footer>
        This project was coded by
        <a href="https://github.com/mike-charity/climate" target="_blank">
          mikecharity
        </a>
        and is
        <a href="https://github.com/mike-charity/climate" target="_blank">
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}
export default App;
