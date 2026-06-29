import { useNavigate } from "react-router-dom";

const quickActions = [
  "Review today's priorities",
  "Start a focused session",
  "Check recent activity",
];

export default function Home() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
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

        <button className="secondary-button" type="button" onClick={logout}>
          Logout
        </button>
      </header>

      <section className="home-summary" aria-label="Daily summary">
        <div>
          <span className="summary-value">3</span>
          <span className="summary-label">Open tasks</span>
        </div>
        <div>
          <span className="summary-value">1</span>
          <span className="summary-label">Focus session</span>
        </div>
        <div>
          <span className="summary-value">24m</span>
          <span className="summary-label">Time saved</span>
        </div>
      </section>

      <section className="home-panel">
        <div>
          <p className="eyebrow">Next up</p>
          <h2>Choose what to work on</h2>
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
