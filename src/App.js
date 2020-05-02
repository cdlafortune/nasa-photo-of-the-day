import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header";
import PhotoCard from "./PhotoCard";
import styled from "styled-components";

function App() {

  const [myData, setData] = useState([]);


  useEffect( () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=hfO7mr6KV4uEaxxk4yfhx3AzJ2NsJ1wzzNKz38kV")
    .then(response => {
      console.log(response);
      setData(response.data);
    })

    .catch(err => {
      console.log(err);
    })
  }, []);


  return (
    <div className="App">
      <Header />
      <PhotoCard 
          url = {myData.url}
          date =  {myData.date}
          title = {myData.title}
          explanation = {myData.explanation}
          copyright = {myData.copyright}
        />
    </div>
  );
}

export default App;
