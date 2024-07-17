import Login_Form from "./Login_Form";
import escudo from "/images/escudo.webp";

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="defaultBGComponentsColor flex flex-col justify-around w-1/3 p-8 text-white">
        <h1 className="text-6xl font-bold text-center">CGE - SAF</h1>
        <Login_Form/>
        <button
          className={
            "w-full mt-4 bg-gray-500 hover:bg-gray-600 p-1 rounded shadow-xl"
          }
        >
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
