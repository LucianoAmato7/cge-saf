import DEResume from "./DEResume"
import Header from "./Header"
import SideBar from "./SideBar"

const Inicio = () => {
    return(
        <div className="h-screen">
            <Header/>
            <SideBar/>
            <DEResume/>
        </div>
    )
}

export default Inicio