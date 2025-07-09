import { BrowserRouter, Route, Routes, Outlet } from "react-router";
import "./Router.css";
import { Home } from "../Pages/Home/Home";
import { Details } from "../Pages/Details/Details";
import { NotFound } from "../Pages/NotFound/NotFound";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
