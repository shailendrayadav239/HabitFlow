import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { HabitsProvider } from "./context/HabitsContext";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <HabitsProvider>
          <App />
        </HabitsProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
