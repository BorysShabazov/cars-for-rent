import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const SharedLayout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);
