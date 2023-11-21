import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";

// Main app layout
export default function AppLayout() {
  return (
    <div className="grid grid-cols-[2fr_9fr] ">
      <div>
        <Aside />
      </div>

      <main className="p-5">
        <Outlet />
      </main>
    </div>
  );
}
