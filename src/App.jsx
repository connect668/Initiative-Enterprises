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
            title="Empire Building Resources"
            description="Guardian is opening as the Initiative Enterprises destination for empire-building resources, operational structure, and execution support."
            accent="Resources / Execution / Scale"
            variant="guardian"
            items={[
              "Empire building resources",
              ...guardianItems,
            ]}
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
            variant="checkpoint"
            items={checkpointItems}
          />
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
