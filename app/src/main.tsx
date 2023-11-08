import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import { ROUTES } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.registrationPage} element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
