import React, {
    useState,
    useEffect
} from "react";
import ReactDOM from "react-dom";
// import "../index.css";
import App from "../App";
import axios from "axios";


import "./App.css";
function ApiCall(){
  const [data, setData] = []
  useEffect(() => {
  axios
      .get(
          'https://api.nasa.gov/#apod'
      )
      .then(response => {
          console.log(response.data)
      })
      .catch(error => {
          console.log(
              "ERROR",
              error
          );
      });
}, []);
}

