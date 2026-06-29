import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

        <Button variant="outline" type="button" onClick={logout}>
          Logout
        </Button>
      </header>

      <section className="home-summary" aria-label="Daily summary">
        <Card>
          <CardContent>
            <span className="summary-value">3</span>
            <span className="summary-label">Open tasks</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <span className="summary-value">1</span>
            <span className="summary-label">Focus session</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <span className="summary-value">24m</span>
            <span className="summary-label">Time saved</span>
          </CardContent>
        </Card>
      </section>

      <Card className="home-panel">
        <CardHeader>
          <p className="eyebrow">Next up</p>
          <CardTitle>Choose what to work on</CardTitle>
          <CardDescription>
            Start from a common workflow or use this space for your next app
            feature.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="quick-actions">
            {quickActions.map((action) => (
              <Button
                className="action-button"
                type="button"
                variant="outline"
                key={action}
              >
                {action}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
