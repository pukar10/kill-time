import { useNavigate } from "react-router-dom";

const quickActions = [
  "Review today's priorities",
  "Start a focused session",
  "Check recent activity",
];

export default function Home({ onLogout }) {
  const navigate = useNavigate();

  const logout = () => {
    onLogout();
    navigate("/login", { replace: true });
  };

  return (
    <main className="home-page">
      <header className="home-header">
        <div>
          <p className="eyebrow">Welcome back</p>
          <h1>Home</h1>
          <p className="home-subtitle">
            Pick up where you left off and keep your next task in view.
          </p>
        </div>

        <button
          className="logout-button"
          type="button"
          onClick={logout}
        >
          Logout
        </button>
      </header>

      <section className="home-summary" aria-label="Daily summary">
        <div className="summary-card">
          <div className="summary-card-content">
            <span className="summary-value">3</span>
            <span className="summary-label">Open tasks</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-card-content">
            <span className="summary-value">1</span>
            <span className="summary-label">Focus session</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-card-content">
            <span className="summary-value">24m</span>
            <span className="summary-label">Time saved</span>
          </div>
        </div>
      </section>

      <section className="home-panel">
        <div className="home-panel-header">
          <p className="eyebrow">Next up</p>
          <h2>Choose what to work on</h2>
          <p className="home-panel-description">
            Start from a common workflow or use this space for your next app
            feature.
          </p>
        </div>

        <div className="quick-actions">
          {quickActions.map((action) => (
            <button className="action-button" type="button" key={action}>
              {action}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
