import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data/data.json";
import { UserType } from "./types";

function App() {
  let [users, setUsers] = useState<UserType[]>(data.users);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
