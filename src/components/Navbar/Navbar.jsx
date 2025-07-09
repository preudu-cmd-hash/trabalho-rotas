import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <>
      <div className={styles.navBarContainer}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link-ativo" : "")}
        >
          {({ isActive }) => (isActive ? "Home" : "Home")}
        </NavLink>
        <br />
        <NavLink
          to="details"
          className={({ isActive }) => (isActive ? "link-ativo" : "")}
        >
          {({ isActive }) => (isActive ? "Detalhes" : "Detalhes")}
        </NavLink>
      </div>
    </>
  );
};
