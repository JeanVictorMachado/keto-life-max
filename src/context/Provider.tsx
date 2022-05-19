import { useState } from "react";
import ContextAPI from "./ContextApi";

export const Provider = ({ children }: any) => {
  const [showToastCookies, setShowToastCookies] = useState(true);
  const [showLoading, setShowLoading] = useState(true);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [desiredWeight, setDesiredWeight] = useState("");
  const [questionOne, setQuestionOne] = useState("");
  const [questionTwo, setQuestionTwo] = useState("");

  const contextState = {
    gender,
    setGender,
    age,
    setAge,
    height,
    setHeight,
    weight,
    setWeight,
    desiredWeight,
    setDesiredWeight,
    questionOne,
    setQuestionOne,
    questionTwo,
    setQuestionTwo,
    showToastCookies,
    setShowToastCookies,
    showLoading,
    setShowLoading,
  };

  return (
    <ContextAPI.Provider value={contextState}>{children}</ContextAPI.Provider>
  );
};
