import { Routes as HandleRoutes, Route } from "react-router-dom";

import { PrivacyPolicy } from "../pages/ PrivacyPolicy";
import { Home } from "../pages/Home";

export const Routes = () => {
  return (
    <HandleRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
    </HandleRoutes>
  );
};
