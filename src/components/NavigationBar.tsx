import React from 'react'
import PI_LOGO from '../assets/pi_logo.jpg'

type NavigationBarProps = {
  scrollToHome: () => void
  scrollToAbout: () => void
  scrollToTokenomics: () => void
  scrollToRoadmap: () => void
  scrollToContact: () => void
}

function NavigationBar({
  scrollToHome,
  scrollToAbout,
  scrollToTokenomics,
  scrollToRoadmap,
  scrollToContact,
}: NavigationBarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItemClasses =
    'select-none text-lg px-2 py-1 text-yellow hover:cursor-pointer hover:text-blue transition-all duration-300 ease-in-out hover:font-bold hover:italic hover:scale-110'
  return (
    <div>
      <nav className="max-h-80 lg:max-h-16 fixed top-0 left-0 px-10 py-2 w-full backdrop-blur-md transition-all duration-500">
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
          <div className="hidden lg:flex">
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
              <li className={menuItemClasses} onClick={scrollToRoadmap}>
                Roadmap
              </li>
              <li className={menuItemClasses} onClick={scrollToContact}>
                Contact
              </li>
            </ul>
            {/* <button
              type="button"
              className="select-none text-2xl px-3 py-2 border border-yellow rounded-xl bg-yellow text-black ml-2 hover:bg-blue hover:border-blue transition duration-300 ease-in-out"
            >
              Whitepaper
            </button> */}
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="select-none text-2xl px-3 py-2 border border-yellow rounded-xl bg-yellow text-black ml-2 hover:bg-amber-700 hover:border-amber-700 transition duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <img src="/images/close.svg" alt="close" className="w-6 h-6" />
              ) : (
                <img src="/images/menu.svg" alt="menu" className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`${
            isMenuOpen ? 'max-h-64' : 'h-0 max-h-0'
          } lg:hidden flex flex-col items-center w-full backdrop-blur-md overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <ul className="text-center">
            <li className={menuItemClasses} onClick={scrollToHome}>
              Home
            </li>
            <li className={menuItemClasses} onClick={scrollToAbout}>
              About
            </li>
            <li className={menuItemClasses} onClick={scrollToTokenomics}>
              Tokenomics
            </li>
            <li className={menuItemClasses} onClick={scrollToRoadmap}>
              Roadmap
            </li>
            <li className={menuItemClasses} onClick={scrollToContact}>
              Contact
            </li>
          </ul>
          {/* <button
            type="button"
            className="select-none text-2xl px-3 py-2 border border-yellow rounded-xl bg-yellow text-black ml-2 hover:bg-blue hover:border-blue transition duration-300 ease-in-out max-w-xs"
          >
            Whitepaper
          </button> */}
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar
