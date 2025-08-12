import { Link } from "react-router-dom";
import "./Teams.css";

// imports from figma
import financeImg from "./images/Finance.png";
import communicationImg from "./images/Communication.png";
import designImg from "./images/Design.png";
import developmentImg from "./images/Development.png";
import programImg from "./images/Program.png";
import logisticsImg from "./images/Logistics.png";


const TEAMS = [
    { id: "finance", name: "Finance and Sponsorship", img: financeImg },
    { id: "communication", name: "Communication", img: communicationImg },
    { id: "design", name: "Design", img: designImg },
    { id: "development", name: "Development", img: developmentImg },
    { id: "program", name: "Program", img: programImg },
    { id: "logistics", name: "Logistics", img: logisticsImg },
];

export default function Teams() {
    return (
        <section className="teams-wrap full-bleed">
            <h1 className="teams-title">Teams</h1>

            <div className="teams-grid">
                {TEAMS.map(t => (
                    <Link key={t.id} to={`/teams/${t.id}`} className="team-link" aria-label={t.name}>
                        <div className="img-tile">
                            <img src={t.img} alt={t.name} loading="lazy" />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

