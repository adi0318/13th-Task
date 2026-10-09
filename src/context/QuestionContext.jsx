import { getQuestions, saveQuestions } from "../utils/storage";

import { createContext, useState, useEffect, useContext } from "react";

const QuestionContext = createContext();

export function QuestionProvider({ children }) {
  const [questions, setQuestions] = useState(() => getQuestions());

  useEffect(() => {
    saveQuestions(questions);
  }, [questions]);

  function addQuestion(question) {
    const newQuestion = {
      id: crypto.randomUUID(),
      ...question,
    };

    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  }

  function deleteQuestion(id) {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== id)
    );
  }

  function updateQuestion(id, updatedData) {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id ? { ...question, ...updatedData } : question
      )
    );
  }

  return (
    <QuestionContext.Provider
      value={{ questions, addQuestion, deleteQuestion, updateQuestion }}
    >
      {children}
    </QuestionContext.Provider>
  );
}

export function useQuestions() {
  return useContext(QuestionContext);
}
