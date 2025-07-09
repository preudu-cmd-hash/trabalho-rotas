import { Outlet } from "react-router";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

export const Header = () => {
  return (
    <div>
      <h1>Trabalho utilizando Router</h1>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
