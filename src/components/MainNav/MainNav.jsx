import { NavLink } from "react-router-dom";

export const MainNav = () => (
  <ul className="flex gap-[4px] container ">
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="catalog">Catalog</NavLink>
    </li>
    <li>
      <NavLink to="favorites">Favorites</NavLink>
    </li>
  </ul>
);
