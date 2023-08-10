import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import {originals,actions} from './urls'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/Rowpost/RowPost";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Orginals' />
      <RowPost url={actions} title="Actions " isSmall  />
    </div>
  );
}

export default App;
