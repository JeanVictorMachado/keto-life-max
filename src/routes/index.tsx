import { Routes as HandleRoutes, Route } from "react-router-dom";

import { PrivacyPolicy } from "../pages/ PrivacyPolicy";
import { Home } from "../pages/Home";
import { PresellPage } from "../pages/PresellPage";
import { QuestionsOne } from "../pages/QuestionsOne";
import { QuestionsThree } from "../pages/QuestionsThree";
import { QuestionsTwo } from "../pages/QuestionsTwo";
import { Results } from "../pages/Results";
import { SalesPage } from "../pages/SalesPage";
import { TermsOfUse } from "../pages/TermsOfUse";

export const Routes = () => {
  return (
    <HandleRoutes>
      <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
      <Route path="/termos-de-uso" element={<TermsOfUse />} />
      <Route path="/1-3" element={<QuestionsOne />} />
      <Route path="/2-3" element={<QuestionsTwo />} />
      <Route path="/3-3" element={<QuestionsThree />} />
      <Route path="/results" element={<Results />} />
      <Route path="/presell" element={<PresellPage />} />
      <Route path="/pv" element={<SalesPage />} />
      <Route path="/" element={<Home />} />
    </HandleRoutes>
  );
};
