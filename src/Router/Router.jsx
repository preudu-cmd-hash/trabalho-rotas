import { BrowserRouter, Route, Routes, Outlet } from "react-router";
import "./Router.css";
import { Home } from "../Pages/Home/Home";
import { Details } from "../Pages/Details/Details";
import { NotFound } from "../Pages/NotFound/NotFound";
import { Header } from "../components/Header/Header";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="home" element={<Home />} />
            <Route path="details" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
