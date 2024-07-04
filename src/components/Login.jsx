import escudo from '/images/escudo.webp'

const Login = () => {
  const HandlerIngresar = (e) => {
    e.preventDefault()
    window.location.href = '/inicio'
  }

    return(
    <div className="flex h-screen">
      <div className="flex flex-col justify-center w-1/3 p-8 bg-blue-900 text-white">
        <h1 className="mb-24 text-6xl font-bold text-center">CGE - SAF</h1>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="dni" className="block text-sm shadow-sm">
              Ingrese su DNI sin puntos
            </label>
            <input id="dni" placeholder="Ingrese su DNI" className="rounded p-2 w-full text-sm text-black"/>
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm shadow-sm">
              Contraseña
            </label>
            <input id="password" type="password" placeholder="Contraseña" className="rounded p-2 w-full text-sm text-black"/>
          </div>
          <div className="text-right">
            <a href="#" className="text-sm text-white underline">
              Recuperar contraseña
            </a>
          </div>
          <button className={"w-full bg-blue-500 hover:bg-blue-600 p-1 rounded shadow-xl"} onClick={(e) => HandlerIngresar(e)}>INGRESAR</button>
        </form>
        <button className={"w-full mt-4 bg-gray-500 hover:bg-gray-600 p-1 rounded shadow-xl"}>INSTRUCTIVO SISTEMA</button>
      </div>
      <div className="relative w-2/3 bg-cover bg-right brightness-50" style={{ backgroundImage: "url('/images/fondo1.webp')" }}>
        <img src={escudo} alt="escudo" className="absolute top-4 right-4 w-14" />
      </div>
    </div>
  )
}

export default Login