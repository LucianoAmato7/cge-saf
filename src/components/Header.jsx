import Logout from './Logout'
import escudo from '/images/escudo.webp'

const Header = () => {
    return(
        <div className="flex flex-row defaultBGComponentsColor h-max sticky top-0 z-10">
            <div className='w-40 flex justify-center'>
                <img src={escudo} alt="escudo" className="w-20 m-2" />
            </div>
            <div className="bg-slate-800 self-center mb-2 rounded-lg py-9 px-4 w-2/3 flex-grow mr-2">
                <p className='text-white text-4xl tracking-wide text-center'>Distrito Electoral {"-------------".toUpperCase()}</p>
            </div>
            <Logout/>
        </div>
    )
}

export default Header


