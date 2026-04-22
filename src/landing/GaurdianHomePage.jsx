import BrandPage from "./BrandPage";

const gaurdianItems = [
  "Gaurdian home placeholder",
  "Empire-building systems",
  "Operational support and execution",
];

export default function GaurdianHomePage() {
  return (
    <BrandPage
      eyebrow="Gaurdian Home"
      title="Gaurdian Home"
      description="This is the new Gaurdian Home page. We can shape the full destination next, but the route and transition are now dedicated to this page."
      accent="Gaurdian / Home / Resources"
      variant="guardian"
      items={gaurdianItems}
    />
  );
}
