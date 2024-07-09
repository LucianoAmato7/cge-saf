import { Link } from "react-router-dom";
import rubrosBtn from "../data/SidebarDATA";

const SideBar = () => {

  return (
    <div className="h-4/5 border-r border-black w-40 flex flex-col justify-center bg-gray-800">
      <ul className="flex flex-col justify-around h-full text-center">

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
