import React from 'react'

type HomeProps = {}
const Home = React.forwardRef<HTMLDivElement, HomeProps>((props, ref) => {
  const onCheckItClick = () => {
    window.open(
      'https://etherscan.io/address/0x886dB6deE814260aFdD82a3C1812792B04e1Fa47',
      '_blank'
    )
  }
  return (
    <div className="w-full lg:flex py-20 lg:pl-10 lg:items-center" ref={ref}>
      <div className="lg:w-1/2">
        <h1 className="text-yellow text-6xl font-bold">Pi Network V2</h1>
        <p className="pt-5 text-xl leading-9">
          Pi network V2 is an <span className="text-blue">upgraded</span>{' '}
          version of the original Pi cryptocurrency. It aims to solve some of
          the issues with the original Pi network and{' '}
          <span className="text-blue">improve the overall user experience</span>
          . With strong community, a dedicated team, and a clear vision, Pi
          network V2 is set to become the next big thing in the cryptocurrency
          space.
        </p>
        <p className="text-yellow text-2xl font-bold pt-5">Contract Address:</p>
        <div className="whitespace-nowrap overflow-ellipsis overflow-hidden">
          <a
            className="text-white text-xl leading-9"
            target="_blank"
            href="https://etherscan.io/address/0x886dB6deE814260aFdD82a3C1812792B04e1Fa47"
            title="Go to Etherscan"
          >
            0x886dB6deE814260aFdD82a3C1812792B04e1Fa47
          </a>
        </div>
        <div className="flex">
          <button
            className="bg-yellow text-black text-xl font-bold rounded-full px-10 py-2 mt-10
        hover:bg-blue hover:text-white transition duration-300 ease-in-out"
            onClick={onCheckItClick}
          >
            Check it
          </button>
        </div>
      </div>
      <div className="mt-10 flex lg:w-1/2 lg:mt-0 lg:pl-5">
        <img
          src="/images/pi_network2.jpg"
          alt="background"
          className="w-full rounded-xl"
        />
      </div>
    </div>
  )
})

export default Home
