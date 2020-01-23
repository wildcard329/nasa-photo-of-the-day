import React from "react";
import InformationCard from "./components/InformationCard";
import ReactStrap from "reactstrap";
import "./App.css"


function App() {
  return (
    <div className="App" style={{backgroundColor: "black", color: "white"}}>
      <h1>NASA Photo of the Day</h1>
      < InformationCard/>
    </div>
  );
}

export default App;
