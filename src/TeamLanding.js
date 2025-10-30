import { Link, useParams } from "react-router-dom";
import "./TeamLanding.css";

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
            <Link to="/teams" className="back-pill" aria-label="Back to Teams">
                <span className="back-icon" aria-hidden="true" />
                Back to Teams
            </Link>

            <h1 style={{ marginTop: 16 }}>{title}</h1>
            <p>
                placeholder page for <strong>{title}</strong>. Add members & photo
            </p>
        </div>
    );
}

