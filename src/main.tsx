import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthRouteProvider } from "./context/authrouterProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthRouteProvider>
      <App />
    </AuthRouteProvider>
  </StrictMode>
);
