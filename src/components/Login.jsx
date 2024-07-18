import { Link } from "react-router-dom";
import Login_Form from "./Login_Form";
import escudo from "/images/escudo.webp";
import { FaAddressBook } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="defaultBGComponentsColor flex flex-col justify-around w-1/3 p-8 text-white">
        <h1 className="text-6xl font-bold text-center">CGE - SAF</h1>
        <Login_Form/>
        <button
        className={
          "mt-4 w-full bg-gray-500 hover:bg-gray-400 duration-100 p-1 rounded shadow-xl mb-5 flex flex-row items-center justify-center"
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
      <div
        className="relative w-full bg-cover bg-right brightness-50"
        style={{ backgroundImage: "url('/images/fondo1.webp')" }}
      ></div>
      <img src={escudo} alt="escudo" className="absolute top-4 right-4 w-14" />
    </div>
  );
};

export default Login;
