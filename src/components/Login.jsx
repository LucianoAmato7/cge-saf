const Login = () => {

    return(
    <div className="flex h-screen">
      <div className="flex flex-col justify-center w-1/3 p-8 bg-blue-900 text-white">
        <h1 className="mb-8 text-4xl font-bold text-center">NOMBRE</h1>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="dni" className="block text-sm">
              Ingrese su DNI sin puntos
            </label>
            <input id="dni" placeholder="Ingrese su DNI" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm">
              Contraseña
            </label>
            <input id="password" type="password" placeholder="Contraseña" />
          </div>
          <div className="text-right">
            <a href="#" className="text-sm text-white underline">
              Recuperar contraseña
            </a>
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-600">INGRESAR</button>
          
        </form>
        <button className="w-full mt-4 bg-gray-500 hover:bg-gray-600">INSTRUCTIVO SISTEMA</button>
      </div>
      <div className="relative w-2/3 bg-cover" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
        <img src="/placeholder.svg" alt="Logo" className="absolute top-4 right-4 w-16 h-16" />
      </div>
    </div>
  )
}

export default Login