import styles from "./Navbar.module.css";
import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <>
      <div>
        <NavLink
          to="details/coisa-feia"
          className={({ isActive }) => (isActive ? "link-ativo" : "")}
        >
          {({ isActive }) => (isActive ? "🔍 Detalhes" : "Detalhes")}
        </NavLink>
      </div>
    </>
  );
};
