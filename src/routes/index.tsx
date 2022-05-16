import { Routes as HandleRoutes, Route } from "react-router-dom";

import { Home } from "../pages/Home";

export const Routes = () => {
  return (
    <HandleRoutes>
      <Route path="/" element={<Home />} />
      {/* <Route component={Sobre} path="/sobre" />
      <Route component={Usuario} path="/usuario" /> */}
    </HandleRoutes>
  );
};
