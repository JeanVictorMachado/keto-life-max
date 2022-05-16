import { Routes as HandleRoutes, Route } from "react-router-dom";

import { PrivacyPolicy } from "../pages/ PrivacyPolicy";
import { Home } from "../pages/Home";
import { QuestionsOne } from "../pages/QuestionsOne";
import { TermsOfUse } from "../pages/TermsOfUse";

export const Routes = () => {
  return (
    <HandleRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
      <Route path="/termos-de-uso" element={<TermsOfUse />} />
      <Route path="/1-3" element={<QuestionsOne />} />
    </HandleRoutes>
  );
};
