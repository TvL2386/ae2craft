// src/routes/CommandCenterLayout.jsx
import { Link, Outlet } from "react-router-dom";
import CommandCenterNavBar from "../components/CommandCenterNavBar";

const CommandCenterLayout = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMBS */}
      <div className="flex gap-4">
        <Link to="/cc" className="text-orange">
          Command Center
        </Link>
      </div>

      {/* SECONDARY NAV */}
      <CommandCenterNavBar />

      {/* CHILD ROUTES RENDER HERE */}
      <div className="min-h-64">
        <Outlet />
      </div>
    </div>
  );
};

export default CommandCenterLayout;
