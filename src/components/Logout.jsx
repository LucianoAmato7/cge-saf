import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaUser, FaAddressBook } from "react-icons/fa";

const Logout = () => {
  return (
    <div className="flex flex-col justify-between mt-3 mr-2 items-start shadow-xl">
      <div className="flex flex-row">
        <div className="flex flex-row items-center bg-slate-100 px-1 mr-1 rounded text-lg border border-black">
          <FaUser className="mr-2" />
          {"Apellido"} {"Nombre"}
        </div>
        <Link to={"/"}>
          <HiOutlineLogout
            className="rounded text-3xl bg-red-500 border-y border-black hover:bg-red-400 duration-100"
            title="cerrar sesion"
          />
        </Link>
      </div>
      <button
        className={
          " h-2/6 text-base w-full bg-gray-500 hover:bg-gray-400 duration-100 p-1 rounded shadow-xl mb-5 flex flex-row items-center justify-center"
        }
      >
        <Link
          to=""
          target="_blank"
          title="Instructivo Sistema"
        >
          <FaAddressBook className="mr-2 text-xl" />
        </Link>
        INSTRUCTIVO SISTEMA
      </button>
    </div>
  );
};

export default Logout;
