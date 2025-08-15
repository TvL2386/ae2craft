// src/components/CommandCenterNavBar.jsx
import { NavLink } from "react-router-dom";

const base = "px-3 py-1 text-sm md:text-base transition";
const active = `${base} bg-orange-800 text-white shadow`;
const inactive = `${base} text-gray-300 hover:text-white hover:bg-white/5`;

export default function CommandCenterNavBar() {
  return (
    <nav className="flex items-center gap-2 md:gap-4 font-medium">
      {/* Note: relative paths (no leading slash) so they nest under /cc */}
      <NavLink
        to="nets"
        className={({ isActive }) => `${isActive ? active : inactive}`}
      >
        Nets
      </NavLink>
      <NavLink
        to="items"
        className={({ isActive }) => `${isActive ? active : inactive}`}
      >
        Items
      </NavLink>
      <NavLink
        to="maintainers"
        className={({ isActive }) => `${isActive ? active : inactive}`}
      >
        Maintainers
      </NavLink>
    </nav>
  );
}
