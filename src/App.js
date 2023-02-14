import "./App.css";
import Leftside from "./compenents/Lefside";
import Main from "./compenents/Main";
import Rightside from "./compenents/Rightside";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [tweets, setTweets] = useState([]);

  return (
    <div className="App">
      <div className="leftside">
        <Leftside />
      </div>
      <div className="main">
        <Main
          tweets={tweets}
          setTweets={setTweets}
          input={input}
          setInput={setInput}
        />
      </div>
      <div className="rightside">
        <Rightside />
      </div>
    </div>
  );
}

export default App;
