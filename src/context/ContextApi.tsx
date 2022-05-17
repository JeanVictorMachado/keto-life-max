import { createContext } from "react";

type ContextProps = {
  showToastCookies: boolean;
  showLoading: boolean;
  setShowToastCookies: (loading: boolean) => void;
  setShowLoading: (loading: boolean) => void;
};

const ContextAPI = createContext<ContextProps>({} as ContextProps);

export default ContextAPI;
