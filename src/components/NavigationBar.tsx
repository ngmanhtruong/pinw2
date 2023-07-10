import React from 'react'
import PI_LOGO from '../assets/pi_logo.jpg'

type NavigationBarProps = {
  scrollToHome: () => void
  scrollToAbout: () => void
  scrollToTokenomics: () => void
}

function NavigationBar({
  scrollToHome,
  scrollToAbout,
  scrollToTokenomics,
}: NavigationBarProps) {
  const menuItemClasses =
    'text-lg px-2 py-1 text-yellow hover:cursor-pointer hover:text-blue transition duration-300 ease-in-out hover:font-bold hover:italic hover:scale-110'
  return (
    <nav className="max-h-16 fixed top-0 left-0 px-10 py-2 w-full backdrop-blur-sm">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            src={PI_LOGO}
            alt="logo"
            className="block w-10 h-10"
            style={{
              borderRadius: '50%',
            }}
          />
          <p className="text-yellow pl-2 text-xl font-bold">Pi Network V2</p>
        </div>
        <div className="flex">
          <ul className="flex items-center">
            <li className={menuItemClasses} onClick={scrollToHome}>
              Home
            </li>
            <li className={menuItemClasses} onClick={scrollToAbout}>
              About
            </li>
            <li className={menuItemClasses} onClick={scrollToTokenomics}>
              Tokenomics
            </li>
            <li className={menuItemClasses}>Roadmap</li>
            <li className={menuItemClasses}>Contact</li>
          </ul>
          <button
            type="button"
            className="text-2xl px-3 py-2 border border-yellow rounded-xl bg-yellow text-black ml-2 hover:bg-blue hover:border-blue transition duration-300 ease-in-out"
          >
            Whitepaper
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
