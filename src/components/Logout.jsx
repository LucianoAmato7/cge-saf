import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Logout = () => {
    return(
        <div className="flex flex-row justify-center top-0 right-0 text-lg mr-2 mt-3 h-7 border border-black items-center shadow-xl">
            <div className="flex flex-row items-center bg-slate-100 px-1 mr-1 rounded-sm">
                <FaUser className="mr-2"/>
                <p>{"Apellido"}, {"Nombre"}</p>
            </div>
            <Link to={'/'}>
                <HiOutlineLogout className="rounded-sm text-3xl bg-red-500 border-y border-black hover:bg-red-400 duration-100" title="cerrar sesion"/>
            </Link>
        </div>
    )
}

export default Logout