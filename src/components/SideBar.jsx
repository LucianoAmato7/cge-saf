import { Link } from "react-router-dom";
import rubrosBtn from "../data/SidebarDATA";

const SideBar = () => {
  return (
    <div className="defaultBGComponentsColor fixed top-0 pt-32 w-40 flex flex-col justify-center left-0 h-screen">
      <ul className="flex flex-col justify-around h-full text-center text-lg">
        <Link to={`/inicio`}>
          <li
            key="inicio"
            className="py-5 drop-shadow-xl text-white font-medium bg-slate-800 rounded-lg hover:bg-slate-600 duration-100"
          >
            Inicio
          </li>
        </Link>

        {rubrosBtn.map((r, index) => (
          <Link to={`/rubro/${r.path}`}>
            <li
              key={index}
              className="py-5 drop-shadow-xl text-white font-medium bg-slate-800 rounded-lg hover:bg-slate-600 duration-100"
            >
              {r.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
