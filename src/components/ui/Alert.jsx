export default function Alert({
  type = "info", // "success" | "error" | "info"
  title,
  message,
  onClose = null,
}) {
  const isError = type === "error";
  const role = isError ? "alert" : "status";
  const ariaLive = isError ? "assertive" : "polite";

  if (!title && !message) return null;

  return (
    <div className={`alert alert--${type}`} role={role} aria-live={ariaLive}>
      <div className="alert__content">
        {title ? <div className="alert__title">{title}</div> : null}
        {message ? <div className="alert__message">{message}</div> : null}
      </div>

      {onClose ? (
        <button
          type="button"
          className="alert__close"
          onClick={onClose}
          aria-label="Dismiss message"
        >
          ×
        </button>
      ) : null}
    </div>
  );
}
