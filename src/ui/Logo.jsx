import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <h2 className="bg-gradient-to-r from-stone-100 to-stone-400 bg-clip-text font-logo text-2xl font-semibold text-transparent sm:text-3xl ">
      <NavLink to="/" className="">
        shop with rex
      </NavLink>
    </h2>
  );
}
