import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastProvider } from "@/context/ToastContext";
import "@/styles/index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </StrictMode>,
);
