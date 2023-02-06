import { NavLink } from "react-router-dom";
import KhojoBird from "../assets/KhojoBird.svg";

function Nav() {
  return (
    <div className="flex items-center justify-between py-4 px-2 text-white z-10">
      <NavLink to="/">
        <img src={KhojoBird} alt="Khojo" className="h-16 w-16 ml-4" />
      </NavLink>

      <div className="flex items-center gap-4">
        <NavLink
          to="about"
          className="border border-slate-100 p-2 rounded-lg hover:text-yellow-400 hover:border-yellow-400 transition"
        >
          About
        </NavLink>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 stroke"
          >
            <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Nav;
