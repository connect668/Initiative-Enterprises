import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
const fallbackMarkup = rootElement.innerHTML;

function restoreFallback() {
  if (!rootElement.innerHTML.trim()) {
    rootElement.innerHTML = fallbackMarkup;
  }
}

window.addEventListener("error", restoreFallback);
window.addEventListener("unhandledrejection", restoreFallback);

try {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  );
} catch (error) {
  restoreFallback();
  throw error;
}
