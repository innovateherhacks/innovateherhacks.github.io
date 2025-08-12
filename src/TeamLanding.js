import { Link, useParams } from "react-router-dom";

const TITLES = {
  finance: "Finance and Sponsorship",
  communication: "Communication",
  design: "Design",
  development: "Development",
  program: "Program",
  logistics: "Logistics",
};

export default function TeamLanding() {
  const { teamId } = useParams();
  const title = TITLES[teamId] ?? "Team";

  return (
    <div style={{ padding: "32px" }}>
      <Link to="/teams" style={{ textDecoration: "none" }}>← Back to Teams</Link>
      <h1 style={{ marginTop: 12 }}>{title}</h1>
      <p>
        This is the placeholder page for <strong>{title}</strong>.  
        Add members, photos, responsibilities, and a contact form here later.
      </p>
    </div>
  );
}
