/*import { useState, useEffect } from "react";
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
} */

import { useState, useEffect } from "react";
import { FaSackDollar } from "react-icons/fa6";
import { TbMessageCircleFilled } from "react-icons/tb";
import { FaPaintBrush } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import "./Teams.css";

// Import images only for teams that have them
import financeImg from "./images/finance-team.JPG";
import communicationImg from "./images/communication-team.JPG";
import designImg from "./images/design-team.JPG";
import developmentImg from "./images/development-team.JPG";

const TEAMS = [
  { id: "finance", name: "Finance and Sponsorship", Icon: FaSackDollar },
  { id: "communication", name: "Communication", Icon: TbMessageCircleFilled },
  { id: "design", name: "Design", Icon: FaPaintBrush },
  { id: "development", name: "Development", Icon: FaCode },
  { id: "program", name: "Program", Icon: IoCalendar },
  { id: "logistics", name: "Logistics", Icon: FaClipboardList },
];

// Map team IDs to their images
const teamImages = {
  finance: financeImg,
  communication: communicationImg,
  design: designImg,
  development: developmentImg,
};

export default function Teams() {
  const [columns, setColumns] = useState(getColumns());
  const [selectedTeam, setSelectedTeam] = useState(null);

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
    2: ["#2E3D5C", "#4D6A94", "#4D6A94", "#2E3D5C"],
  };

  const pattern = colorPatterns[columns];

  return (
    <section className="teams-wrap full-bleed">
      {/* Dynamic title */}
      <h1 className="teams-title">
        {selectedTeam
          ? `${TEAMS.find((t) => t.id === selectedTeam)?.name} Team`
          : "Teams"}
      </h1>

      {/* Only show the grid if no team is selected */}
      {!selectedTeam && (
        <div className="teams-grid">
          {TEAMS.map((t, index) => {
            const Icon = t.Icon;
            const bgColor =
              columns === 2
                ? pattern[index % pattern.length]
                : pattern[index % 2];

            return (
              <div
                key={t.id}
                className="team-link"
                aria-label={t.name}
                onClick={() => teamImages[t.id] && setSelectedTeam(t.id)}
                style={{ cursor: teamImages[t.id] ? "pointer" : "default" }}
              >
                <div className="team-icon" style={{ backgroundColor: bgColor }}>
                  <Icon className="team-icon-svg" aria-hidden="true" />
                  <p>{t.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Team landing section */}
      {selectedTeam && (
        <div className="team-landing">
          <div className="team-landing-content">
            <img
              src={teamImages[selectedTeam]}
              alt={`${selectedTeam} team`}
              className="team-image"
            />
            <button
              className="back-button"
              onClick={() => setSelectedTeam(null)}
            >
              ← Back to Teams
            </button>
          </div>
        </div>
      )}
    </section>
  );
}