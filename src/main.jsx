import React from "react";
import ReactDOM from "react-dom/client";

function FreshTest() {
  return (
    <div
      style={{
        background: "black",
        color: "lime",
        minHeight: "100vh",
        fontSize: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      INLINE FRESH TEST
    </div>
  );
}

try {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <FreshTest />
    </React.StrictMode>
  );
} catch (e) {
  document.body.innerHTML = `<pre style="color:red;background:black;min-height:100vh;padding:24px;">${String(e)}</pre>`;
}
