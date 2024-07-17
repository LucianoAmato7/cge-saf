import Logout from './Logout'
import escudo from '/images/escudo.webp'

const Header = () => {
    return(
        <div className="defaultBGComponentsColor h-max sticky top-0 z-10">
            <div className='w-40 flex justify-center'>
                <img src={escudo} alt="escudo" className="w-20 m-2" />
            </div>
            <Logout/>
        </div>
    )
}

export default Header


