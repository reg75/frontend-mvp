import { useState } from "react";
import Alert from "../components/ui/Alert.jsx";
import ProtectedLayout from "../components/layout/ProtectedLayout.jsx";

export default function Account() {
  // EN: Dummy “current user” data for frontend-only MVP
  // BR: Dados fictícios do “usuário atual” para MVP apenas de front-end
  const [form, setForm] = useState({
    name: "Paul Regnier",
    email: "paul@example.com",
    password: "password123", // EN: dummy only | BR: apenas fictício
  });

  // EN: Feedback state for success / error messages
  // BR: Estado de feedback para mensagens de sucesso / erro
  const [feedback, setFeedback] = useState(null); // { type, title, message }

  // EN: Handle input changes (controlled inputs)
  // BR: Manipula mudanças nos campos (inputs controlados)
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // EN: Simulated save action (local state only)
  // BR: Ação de salvar simulada (apenas estado local)
  function handleSave(e) {
    e.preventDefault();

    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!form.name.trim()) {
      setFeedback({
        type: "error",
        title: "Name required",
        message: "Please enter your name.",
      });
      return;
    }

    if (!emailRegex.test(form.email)) {
      setFeedback({
        type: "error",
        title: "Invalid email",
        message: "Please enter a valid email address.",
      });
      return;
    }

    if (form.password.length < 6) {
      setFeedback({
        type: "error",
        title: "Password too short",
        message: "Use at least 6 characters (dummy auth).",
      });
      return;
    }

    setFeedback({
      type: "success",
      title: "Saved",
      message: "Account details updated (stored locally for this MVP).",
    });
  }

  return (
    <ProtectedLayout title="Account">
      <div className="account-page">
        <header className="account-page__header">
          <h1>Account</h1>
        </header>

        {feedback && (
          <div className="account-stack">
            <Alert
              type={feedback.type}
              title={feedback.title}
              message={feedback.message}
            />
          </div>
        )}

        <form className="account-card account-stack" onSubmit={handleSave}>
          <div className="account-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </div>

          <div className="account-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className="account-field">
            <label htmlFor="password">Password (dummy)</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
          </div>

          <div className="account-actions">
            <button className="btn" type="submit">
              Save
            </button>

            <button
              className="btn btn--ghost"
              type="button"
              onClick={() => setFeedback(null)}
            >
              Clear message
            </button>
          </div>
        </form>
      </div>
    </ProtectedLayout>
  );
}
