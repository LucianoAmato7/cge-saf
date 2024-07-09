const Login_Form = () => {
  const HandlerIngresar = (e) => {
    e.preventDefault()
    window.location.href = '/inicio'
  }
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="dni" className="block text-sm shadow-sm">
          Ingrese su DNI sin puntos
        </label>
        <input
          id="dni"
          placeholder="Ingrese su DNI"
          className="rounded p-2 w-full text-sm text-black"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm shadow-sm">
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          placeholder="Contraseña"
          className="rounded p-2 w-full text-sm text-black"
        />
      </div>
      <div className="text-right">
        <a href="#" className="text-sm text-white underline">
          Recuperar contraseña
        </a>
      </div>
      <button
        className={"w-full bg-blue-800 hover:bg-blue-600 p-1 rounded shadow-xl"}
        onClick={(e) => HandlerIngresar(e)}
      >
        INGRESAR
      </button>
    </form>
  );
};

export default Login_Form;
