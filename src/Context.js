import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const DataProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(3);

  const removeQuestion = () => {
    if (questions.length > 1) {
      let newQuestions = questions;
      newQuestions.shift();
      setQuestions(newQuestions);
    } else {
      setLoading(true);
      getQuestions();
    }
  };

  const reset = () => {
    setLoading(true);
    setScore(3);
    getQuestions();
  };

  const value = {
    loading,
    questions,
    score,
    scores: ["7%", "21%", "35%", "50%", "64%", "78%", "92%"],
    removeQuestion,
    setNewScore: (newScore) => setScore(newScore),
    reset,
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      const requestOptions = {
        method: "GET",
      };
      let response = await fetch(
        "http://localhost:5000/questions",
        requestOptions
      );
      response = await response.json();
      setQuestions(response.questions);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useData = () => useContext(Context);
