import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSackDollar } from "react-icons/fa6";
import { TbMessageCircleFilled } from "react-icons/tb";
import { FaPaintBrush } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import "./Teams.css";

const TEAMS = [
  { id: "finance", name: "Finance and Sponsorship", Icon: FaSackDollar, color: "#2E3D5C" },
  { id: "communication", name: "Communication", Icon: TbMessageCircleFilled, color: "#4D6A94" },
  { id: "design", name: "Design", Icon: FaPaintBrush, color: "#2E3D5C" },
  { id: "development", name: "Development", Icon: FaCode, color: "#4D6A94" },
  { id: "program", name: "Program", Icon: IoCalendar, color: "#2E3D5C" },
  { id: "logistics", name: "Logistics", Icon: FaClipboardList, color: "#4D6A94" },
];

export default function Teams() {
  const [columns, setColumns] = useState(getColumns());

  function getColumns() {
    if (window.innerWidth <= 860) return 1;
    if (window.innerWidth <= 1200) return 2;
    return 3;
  }

  useEffect(() => {
    const handleResize = () => setColumns(getColumns());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const colorPatterns = {
    1: ["#2E3D5C", "#4D6A94"],
    3: ["#2E3D5C", "#4D6A94"],
    2: ["#2E3D5C", "#4D6A94", "#4D6A94", "#2E3D5C"], // specific pattern
  };

  const pattern = colorPatterns[columns];

  return (
    <section className="teams-wrap full-bleed">
      <h1 className="teams-title">Teams</h1>

      <div className="teams-grid">
        {TEAMS.map((t, index) => {
          const Icon = t.Icon;
          const bgColor =
            columns === 2
              ? pattern[index % pattern.length] // repeat pattern if more teams
              : pattern[index % 2]; // alternate for 1 or 3 columns

          return (
            <Link key={t.id} to={`/teams/${t.id}`} className="team-link" aria-label={t.name}>
              <div className="team-icon" style={{ backgroundColor: bgColor }}>
                <Icon className="team-icon-svg" aria-hidden="true" />
                <p>{t.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}