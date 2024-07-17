import { Link } from "react-router-dom";
import rubrosBtn from "../data/SidebarDATA";

const SideBar = () => {

  return (
    <div className="defaultBGComponentsColor fixed top-0 pt-32 w-40 flex flex-col justify-center left-0 h-screen">
      <ul className="flex flex-col justify-around h-full text-center text-lg">

        <li key="inicio" className="p-2 drop-shadow-xl text-white font-medium hover:bg-slate-600 duration-100">
            <Link to={`/inicio`} >Inicio</Link>
        </li>

        {rubrosBtn.map( (r, index) => 
          <li key={index} className="p-2 drop-shadow-xl text-white font-medium hover:bg-slate-600 duration-100">
            <Link to={`/rubro/${r.path}`} >{r.name}</Link>
          </li>
        )}

      </ul>
    </div>
  );
};

export default SideBar;
