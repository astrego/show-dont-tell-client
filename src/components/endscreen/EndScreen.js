import { useState, useEffect } from "react";
import { useData } from "../../Context";
import "./EndScreen.css";

function EndScreen() {
  const { reset, score, scores } = useData();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (score === 0 || score === scores.length - 1) {
      setTimeout(() => {
        setShow(true);
      }, 800);
    } else {
      setShow(false);
    }
  }, [score]);

  let styles = show
    ? {
        zIndex: 100,
        visibility: "visible",
      }
    : {
        zIndex: -100,
        visibility: "hidden",
      };

  return (
    <div className="endscreen" style={styles}>
      <div>
        <h1
          className="result-text"
          style={
            score === 0
              ? { color: "rgb(30, 255, 105)" }
              : { color: "rgb(255, 30, 30)" }
          }
        >
          {score === 0 ? "YOU WON!" : "YOU LOST!"}
        </h1>
        <button className="reset" onClick={reset}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default EndScreen;
