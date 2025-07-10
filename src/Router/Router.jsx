import { HashRouter, Route, Routes } from "react-router";
import { Home } from "../Pages/Home/Home";
import { Details } from "../Pages/Details/Details";
import { NotFound } from "../Pages/NotFound/NotFound";
import { Layout } from "../components/Layout/Layout";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="details/:name" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
