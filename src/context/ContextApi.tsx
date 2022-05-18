import { createContext } from "react";

export type InformationsProps = {
  age: string;
  height: string;
  weight: string;
  DesiredWeight: string;
};

type ContextProps = {
  showToastCookies: boolean;
  showLoading: boolean;
  personalInformation: InformationsProps;
  setShowToastCookies: (loading: boolean) => void;
  setShowLoading: (loading: boolean) => void;
  setPersonalInformation: (props: InformationsProps) => void;
};

const ContextAPI = createContext<ContextProps>({} as ContextProps);

export default ContextAPI;
