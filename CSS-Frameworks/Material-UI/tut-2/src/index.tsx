import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import { Database } from "./Components/Pages/Database/Database";
import { Authentication } from "./Components/Pages/Authentication/Authentication";
import { Storage } from "./Components/Pages/Storage/Storage";
import { Hosting } from "./Components/Pages/Hosting/Hosting";
import { MyFunction } from "./Components/Pages/Function/MyFunction";
import { MachineLearning } from "./Components/Pages/MachineLearning/MachineLearning";

import { ThemeProvider } from "@mui/material/styles";
import { dashboardTheme } from "./dashboardTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="authentication" element={<Authentication />} />
          <Route path="database" element={<Database />} />
          <Route path="storage" element={<Storage />} />
          <Route path="hosting" element={<Hosting />} />
          <Route path="functions" element={<MyFunction />} />
          <Route path="machine-learning" element={<MachineLearning />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

reportWebVitals();
