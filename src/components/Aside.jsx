import { Link } from "react-router-dom";
import escudo from '/images/escudo.webp'

const Aside = () => {
  const buttonStyle = "p-2 border-white border-y drop-shadow-xl bg-blue-500"
  return (
    <aside className="h-full w-2/12 flex flex-col justify-center py-4 bg-blue-900 text-white">
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
