import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMBS */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span className="text-orange">-</span>
        <span className="text-orange">Introduction</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-orange text-3xl md:text-6xl font-bold">
            Power Up Your AE2 Networks
          </h1>
          <p className="mt-8 text-md md:text-xl">
            P2P Craft connects your Applied Energistics 2 networks to the web —
            giving you live item tracking, automated stocking, and multi-net
            control from one dashboard. Just add your Nets, run the script, and
            let the automation flow.
          </p>
          <p className="mt-6 text-md md:text-xl max-w-3xl">
            Each Net you create in P2P Craft comes with a custom
            <code className="mx-1 bg-black/20 px-1 rounded">
              p2pcraft-net.lua
            </code>{" "}
            script. Install it on your OpenComputers setup, and it will securely
            sync with your dashboard using a unique API key. The script uploads
            your AE2 item data, keeps your stock levels up to date, and
            automatically downloads crafting manifests to run. You control how
            many crafts can run at once per Net — so whether you’re managing a
            single subnet or a massive multi-network system, P2P Craft keeps
            everything in sync and on autopilot.
          </p>
        </div>
      </div>
      {/* FEATURED POSTS */}
      {/* POST LIST */}
    </div>
  );
};

export default Homepage;
