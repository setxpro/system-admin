import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GetThemeProvider } from "./Contexts/theme/GetThemeContext";
import { AuthProvider } from "./Contexts/Auth/AuthContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GetThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GetThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
