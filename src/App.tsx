import { Provider } from "./context/Provider";
import { Routes } from "./routes";

export default function App() {
  return (
    <>
      <Provider>
        <Routes />
      </Provider>
    </>
  );
}
