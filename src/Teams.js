import { Link } from "react-router-dom";
import "./Teams.css";

const TEAMS = [
  { id: "finance", name: "Finance and Sponsorship", emoji: "💰", tone: "tone1" },
  { id: "communication", name: "Communication", emoji: "💬", tone: "tone2" },
  { id: "design", name: "Design", emoji: "🎨", tone: "tone1" },
  { id: "development", name: "Development", emoji: "💻", tone: "tone2" },
  { id: "program", name: "Program", emoji: "📅", tone: "tone1" },
  { id: "logistics", name: "Logistics", emoji: "📝", tone: "tone2" },
];

export default function Teams() {
  return (
    <section className="teams-wrap">
      <h1 className="teams-title">Teams</h1>

      <div className="teams-grid">
        {TEAMS.map((t) => (
          <Link key={t.id} to={`/teams/${t.id}`} className={`team-card ${t.tone}`}>
            <span className="team-icon" aria-hidden="true">{t.emoji}</span>
            <span className="team-name">{t.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
