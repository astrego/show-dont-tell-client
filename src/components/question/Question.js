import { useState, useEffect } from "react";
import "./Question.css";
import { useData } from "../../Context";

function Question() {
  const [question, setQuestion] = useState({});
  const [result, setResult] = useState("");
  const [resultClass, setResultClass] = useState("result");
  const { score, scores, removeQuestion, questions, setNewScore } = useData();

  useEffect(() => {
    getQuestion();
  }, []);

  const getQuestion = async () => {
    const requestOptions = {
      method: "GET",
    };
    try {
      if (questions[0]) {
        let response = await fetch(
          `http://localhost:5000/question/${questions[0]}`,
          requestOptions
        );
        response = await response.json();
        setQuestion(response);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const clickHandler = (answer) => {
    if (answer === question.answer) {
      setResultClass("result active");
      setResult("GOOD!");
      setTimeout(() => {
        setResultClass("result inactive");
      }, 1000);
      setTimeout(() => {
        setResultClass("result");
        setResult("");
        removeQuestion();

        const newScore = score - 1;
        setNewScore(newScore);
        if (newScore !== 0) {
          getQuestion();
        }
      }, 1500);
    } else {
      setResultClass("result active");
      setResult("WRONG!");
      setTimeout(() => {
        setResultClass("result inactive");
      }, 1000);
      setTimeout(() => {
        setResultClass("result");
        setResult("");
        removeQuestion();
        const newScore = score + 1;
        setNewScore(newScore);
        if (newScore !== scores.length - 1) {
          getQuestion();
        }
      }, 1500);
    }
  };

  return (
    <div>
      <h2 className="question">{question.question}</h2>
      <div className="answer-container">
        <span className="answer">A: {question.a}</span>
        <span className="answer">B: {question.b}</span>
        <span className="answer">C: {question.c}</span>
      </div>
      <div className="btn-container">
        <button className="answer-btn" onClick={() => clickHandler("a")}>
          A
        </button>
        <button className="answer-btn" onClick={() => clickHandler("b")}>
          B
        </button>
        <button className="answer-btn" onClick={() => clickHandler("c")}>
          C
        </button>
      </div>
      <h1 className={resultClass}>{result}</h1>
    </div>
  );
}

export default Question;
