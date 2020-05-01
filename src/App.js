import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header";


function App() {

  useEffect( () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=hfO7mr6KV4uEaxxk4yfhx3AzJ2NsJ1wzzNKz38kV")
    .then(response => {
      console.log(response);
    })

    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <div className="App">
      <Header />
      {/* <PhotoCard /> */}
    </div>
  );
}

export default App;
