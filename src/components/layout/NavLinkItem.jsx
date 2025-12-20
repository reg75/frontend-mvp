import { NavLink } from "react-router-dom";

export default function NavLinkItem({ to, label, variant = "link" }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        if (variant === "button") return "nav__button";
        return isActive ? "nav__link nav__link--active" : "nav__link";
      }}
    >
      {label}
    </NavLink>
  );
}
