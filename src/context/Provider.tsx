import { useState } from "react";
import ContextAPI from "./ContextApi";

export const Provider = ({ children }: any) => {
  const [showToastCookies, setShowToastCookies] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  const contextState = {
    showToastCookies,
    setShowToastCookies,
    showLoading,
    setShowLoading,
  };

  return (
    <ContextAPI.Provider value={contextState}>{children}</ContextAPI.Provider>
  );
};
