import { useState } from "react";
import ContextAPI, { InformationsProps } from "./ContextApi";

export const Provider = ({ children }: any) => {
  const [showToastCookies, setShowToastCookies] = useState(true);
  const [showLoading, setShowLoading] = useState(true);
  const [personalInformation, setPersonalInformation] = useState({
    age: "",
    height: "",
    weight: "",
    DesiredWeight: "",
  } as InformationsProps);

  const contextState = {
    showToastCookies,
    setShowToastCookies,
    showLoading,
    setShowLoading,
    personalInformation,
    setPersonalInformation,
  };

  return (
    <ContextAPI.Provider value={contextState}>{children}</ContextAPI.Provider>
  );
};
