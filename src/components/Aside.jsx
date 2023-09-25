import { NavLink } from "react-router-dom";
import Logo from "../ui/Logo";

export default function Aside() {
  return (
    <div className="fixed h-[100dvh] space-y-5 bg-gradient-to-r from-emerald-600 to-emerald-800 px-3 py-5 text-stone-300">
      <Logo />
      <div className="space-y-2">
        <h2 className="text-2xl">
          <NavLink to="/">Home</NavLink>
        </h2>
        <h2 className="text-2xl">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </h2>
      </div>
    </div>
  );
}
