import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <>
      <div>
        <NavLink
          to="home"
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
