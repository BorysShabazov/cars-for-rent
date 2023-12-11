import { NavLink } from "react-router-dom";
import { firstLetterUp } from "../../helpers/firstLetterUp";

const navArr = [
  { path: "/", text: "home" },
  { path: "catalog", text: "catalog" },
  { path: "favorites", text: "favorites" },
];

export const MainNav = () => (
  <ul className="flex gap-[4px] container justify-around py-[16px] m-0">
    {navArr.map(({ path, text }) => (
      <li key={text}>
        <NavLink to={path} className="text-xl font-medium hover:text-blue">
          {firstLetterUp(text)}
        </NavLink>
      </li>
    ))}
  </ul>
);
