import React from "react";
import ReactDOM from "react-dom/client";

function TestApp() {
  return <h1 style={{ color: "red" }}>REACT TEST</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>
);
