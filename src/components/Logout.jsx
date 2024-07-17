import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";

const Logout = () => {
    return(
        <div className="flex flex-row justify-center absolute top-0 right-0 text-lg mr-2 mt-2 h-7 border border-black items-center shadow-xl">
            <p className="bg-slate-200 px-1 mr-1 rounded-sm">Amato, Luciano</p>
            <Link to={''}>
                <HiOutlineLogout className="rounded-sm text-3xl bg-red-500 border-y border-black hover:bg-red-400 duration-100" title="cerrar sesion"/>
            </Link>
        </div>
    )
}

export default Logout