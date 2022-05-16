import { Routes as HandleRoutes, Route } from "react-router-dom";

import { PrivacyPolicy } from "../pages/ PrivacyPolicy";
import { Home } from "../pages/Home";
import { TermsOfUse } from "../pages/TermsOfUse";

export const Routes = () => {
  return (
    <HandleRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
      <Route path="/termos-de-uso" element={<TermsOfUse />} />
    </HandleRoutes>
  );
};
