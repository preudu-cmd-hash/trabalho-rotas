import styles from "./Navbar.module.css";
import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <NavLink
          to="home"
          className={({ isActive }) => (isActive ? "link-ativo" : "")}
        >
          {({ isActive }) => (isActive ? "🏠 Home" : "Home")}
        </NavLink>
        <br />
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
