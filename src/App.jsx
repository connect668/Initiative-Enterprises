import HomePage from "./b2b/pages/HomePage";
export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        display: "grid",
        placeItems: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <div>
        <p style={{ letterSpacing: "0.2em", opacity: 0.7 }}>
          INITIATIVE ENTERPRISES
        </p>
        <h1 style={{ fontSize: "48px", margin: "16px 0" }}>
          Working Vercel Test Page
        </h1>
        <p style={{ opacity: 0.7 }}>
          If you can see this, your deploy is working.
        </p>
      </div>
    </main>
  );
}
