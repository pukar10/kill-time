import { useNavigate } from "react-router-dom";
import { useState } from "react";

const quickActions = [
  "Review today's priorities",
  "Start a focused session",
  "Check recent activity",
];

const apiUrl = import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000";

export default function Home({ onLogout }) {
  const navigate = useNavigate();
  const [healthStatus, setHealthStatus] = useState("Not checked");
  const [healthError, setHealthError] = useState("");
  const [checkingHealth, setCheckingHealth] = useState(false);

  const logout = () => {
    onLogout();
    navigate("/login", { replace: true });
  };

  const checkHealth = async () => {
    setCheckingHealth(true);
    setHealthError("");

    try {
      const response = await fetch(`${apiUrl}/health`);

      if (!response.ok) {
        throw new Error(`Health check failed with ${response.status}`);
      }

      const data = await response.json();
      setHealthStatus(data.status ?? "unknown");
    } catch (error) {
      setHealthStatus("Unavailable");
      setHealthError(error instanceof Error ? error.message : "Health check failed");
    } finally {
      setCheckingHealth(false);
    }
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

      <section className="home-panel health-panel" aria-label="Backend health">
        <div className="home-panel-header">
          <p className="eyebrow">API status</p>
          <h2>Backend health</h2>
          <p className="home-panel-description">
            Check whether the FastAPI backend is responding.
          </p>
        </div>

        <div className="health-check">
          <button
            className="health-button"
            type="button"
            onClick={checkHealth}
            disabled={checkingHealth}
          >
            {checkingHealth ? "Checking..." : "Check health"}
          </button>

          <div className="health-result" aria-live="polite">
            <span className="health-label">Status</span>
            <strong>{healthStatus}</strong>
            {healthError && <p>{healthError}</p>}
          </div>
        </div>
      </section>
    </main>
  );
}
