import { Link } from "react-router-dom";

const Aside = () => {
  const buttonStyle = "p-2 border-black border-y drop-shadow-xl bg-slate-500 text-black italic font-medium"
  return (
    <aside className="h-4/5 border-r border-black w-40 flex flex-col justify-center bg-blue-900">
      {/* <img src={escudo} alt="escudo" className="w-1/3 self-center top-4 right-4" /> */}
      <ul className="flex flex-col justify-around h-full text-center">
        <li className={buttonStyle}>
          <Link to={`/rubro/inicio`}>INICIO</Link>
        </li>
        
        <li className={buttonStyle}>
          <Link to={`/rubro/viaticos`}>VIATICOS</Link>
        </li>

        <li className={buttonStyle}>
          <Link to={`/rubro/cajaChica`}>CAJA CHICA</Link>
        </li>

        <li className={buttonStyle}>
          <Link to={`/rubro/combustible`}>COMBUSTIBLE</Link>
        </li>

        <li className={buttonStyle}>
          <Link to={`/rubro/actosContractuales`}>ACTOS CONTRACTUALES</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
