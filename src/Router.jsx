import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import OcrPage from "./pages/ocrPage";
import HomePage from "./pages/homePage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/ocrpage"
          element={<OcrPage />}
        />
      </Routes>
    </Router>
  );
}
