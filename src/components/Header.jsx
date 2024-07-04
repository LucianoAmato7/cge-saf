import escudo from '/images/escudo.webp'

const Header = () => {
    return(
        <div className="bg-blue-500 h-max border-b border-black">
            <div className='w-40 flex justify-center border-r border-black'>
                <img src={escudo} alt="escudo" className="w-20 m-2" />
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Header


