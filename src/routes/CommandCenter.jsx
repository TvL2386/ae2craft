import { Link } from "react-router-dom";
import CommandCenterNavBar from "../components/CommandCenterNavBar";

const CommandCenter = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMBS */}
      <div className="flex gap-4">
        <Link to="/cc">Command Center</Link>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <CommandCenterNavBar />
        </div>
      </div>
      {/* FEATURED POSTS */}
      {/* POST LIST */}
    </div>
  );
};

export default CommandCenter;
