import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./landing/LandingPage";
import BrandPage from "./landing/BrandPage";

const guardianItems = [
  "Operational planning and decision support",
  "Growth systems for startups and scaling teams",
  "Structure, accountability, and execution design",
];

const checkpointItems = [
  "Interviews and media positioning",
  "Brand storytelling for authority and trust",
  "Content systems that turn attention into leverage",
];

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/guardian"
        element={
          <BrandPage
            eyebrow="Guardian"
            title="Operational structure built for companies that need sharper execution."
            description="Guardian is the Initiative Enterprises destination for operational structure and growth support for startups and scaling businesses."
            accent="Structure / Execution / Scale"
            items={guardianItems}
          />
        }
      />
      <Route
        path="/checkpoint-media"
        element={
          <BrandPage
            eyebrow="Checkpoint Media"
            title="Media and narrative systems that turn visibility into authority."
            description="Checkpoint Media is the Initiative Enterprises destination for media, interviews, and brand storytelling that turn attention into authority."
            accent="Media / Interviews / Authority"
            items={checkpointItems}
          />
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
