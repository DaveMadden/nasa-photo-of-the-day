import React, { useState, useEffect } from "react";
import axios from 'axios';
// import { BASE_URL, API_KEY } from "./constants";
import "./App.css";

function App() {
  // console.log(BASE_URL, API_KEY);

  //state
  const [pod, setPod] = useState("");

  //use effect
  //api call
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=Sd4BnSA8fJaXBOdPBsZNHlhipGXyDtHharhOlUoK")
      .then(res => {
        console.log(res.data);
        setPod(res.data);
      }).catch(err => {
        console.log(err);
      })
  }, []);
  //react render


  return (
    <div className="App">
      <h1>{pod.title}</h1>
      <img src={pod.url} />
      <p>{pod.explanation}</p>
    </div>
  );
}

export default App;
