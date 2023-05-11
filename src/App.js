import { useState, useEffect } from "react";
import "./App.css";
import Question from "./components/question/Question";
import Meter from "./components/meter/Meter";
import { useData } from "./Context";
import EndScreen from "./components/endscreen/EndScreen";

function App() {
  const { loading, score, scores } = useData();

  useEffect(() => {}, [loading, score]);

  return (
    <div className="App">
      <Meter top={scores[score]} />
      {!loading ? <Question /> : null}
      <EndScreen />
    </div>
  );
}

export default App;
