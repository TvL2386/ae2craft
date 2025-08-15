// src/components/CommandCenterNavBar.jsx
import { NavLink } from "react-router-dom";

const base = "px-3 py-2 rounded-md text-sm md:text-base transition";
const active = "bg-orange-800 text-white shadow";
const inactive = "text-gray-300 hover:text-white hover:bg-white/5";

export default function CommandCenterNavBar() {
  return (
    <nav className="flex items-center gap-2 md:gap-4 font-medium">
      {/* Note: relative paths (no leading slash) so they nest under /cc */}
      <NavLink
        to="nets"
        className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
      >
        Nets
      </NavLink>
      <NavLink
        to="items"
        className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
      >
        Items
      </NavLink>
      <NavLink
        to="maintainers"
        className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
      >
        Maintainers
      </NavLink>
    </nav>
  );
}
