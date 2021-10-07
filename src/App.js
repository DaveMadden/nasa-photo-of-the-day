import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from "./constants";
import "./App.css";
import Pod from './Pod'

function App() {
  const [pod, setPod] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`)
      .then(res => {
        // console.log(res.data);
        setPod(res.data);
      }).catch(err => {
        console.log(err);
      })
  }, []);
  
  if (!pod) return <h3>Loading...</h3>;

  return(
    <div className="App">
      <Pod pod={pod}/>
    </div>
  );
}

export default App;
