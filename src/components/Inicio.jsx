import Header from "./Header"
import SideBar from "./SideBar"

const Inicio = () => {
    return(
        <div className="h-screen">
            <Header/>
            <SideBar/>
            {/* ACA EL COMPONENTE QUE CARGUE EL "RESUMEN (RESUME)" VA A HABER UNO PARA LOS DISTRITOS Y OTRO PARA NUCLEO */}
        </div>
    )
}

export default Inicio