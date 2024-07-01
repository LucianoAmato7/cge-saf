const Aside = () => {
  return (
    <div className="">
      <ul>
        <li className="">
          <Link to={`/rubro/viaticos`}>VIATICOS</Link>
        </li>

        <li className="">
          <Link to={`/rubro/cajaChica`}>CAJA CHICA</Link>
        </li>

        <li className="">
          <Link to={`/rubro/combustible`}>COMBUSTIBLE</Link>
        </li>

        <li className="">
          <Link to={`/rubro/actosContractuales`}>ACTOS CONTRACTUALES</Link>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
