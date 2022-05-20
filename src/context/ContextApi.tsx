import { createContext } from "react";

export type PersonalInformationsProps = {
  gender: string;
  setGender: (props: string) => void;
  age: string;
  setAge: (props: string) => void;
  height: string;
  setHeight: (props: string) => void;
  weight: string;
  setWeight: (props: string) => void;
  desiredWeight: string;
  setDesiredWeight: (props: string) => void;
  imcCalculation: string;
  setImcCalculation: (props: string) => void;
  questionOne: string;
  setQuestionOne: (props: string) => void;
  questionTwo: string;
  setQuestionTwo: (props: string) => void;
};

type ContextProps = {
  gender: string;
  setGender: (props: string) => void;
  age: string;
  setAge: (props: string) => void;
  height: string;
  setHeight: (props: string) => void;
  weight: string;
  setWeight: (props: string) => void;
  desiredWeight: string;
  setDesiredWeight: (props: string) => void;
  imcCalculation: string;
  setImcCalculation: (props: string) => void;
  questionOne: string;
  setQuestionOne: (props: string) => void;
  questionTwo: string;
  setQuestionTwo: (props: string) => void;
  showLoading: boolean;
  setShowLoading: (loading: boolean) => void;
  showToastCookies: boolean;
  setShowToastCookies: (loading: boolean) => void;
};

const ContextAPI = createContext<ContextProps>({} as ContextProps);

export default ContextAPI;
