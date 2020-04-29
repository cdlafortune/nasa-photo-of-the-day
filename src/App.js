import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";



function App() {
  // const [myData] = useState(data);

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
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
