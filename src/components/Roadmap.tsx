import React from 'react'

type RoadmapProps = {}
const Roadmap = React.forwardRef<HTMLDivElement, RoadmapProps>((props, ref) => {
  return (
    <div className="py-20 lg:px-10">
      <h1 className="text-yellow text-6xl text-center font-bold">Roadmap</h1>
      <p className="py-10 text-xl leading-snug">
        We've been around for a while, made some friends, made some
        partnerships... We know what it takes to make a project move! Expect the
        unexpected! We are here to stay!
      </p>
      <div
        ref={ref}
        className="flex flex-wrap flex-col lg:flex-row pt-10 max-w-screen-xl m-auto"
      >
        <div className="lg:w-1/2 xl:w-1/3 px-5">
          <div className="rounded h-full flex flex-col">
            <div className="flex min-h-52">
              <img
                className="w-full object-cover max-h-64 object-center"
                src="/images/pi_stage1.jpg"
                alt="roadmap-1"
              />
            </div>
            <div className="p-5 text-xl dark:bg-slate-700 bg-slate-400 leading-relaxed h-full">
              <h1 className="text-yellow text-2xl font-bold pb-5">Stage 1</h1>
              <p>- Complete presale and launch token on Uniswap</p>
              <p>- Lock liquidity for 1 year on Uniswap</p>
              <p>- Renounce ownership of smart contract </p>
              <p>
                - Apply for initial exchange listings (Bitmart, Gemini, Mexc)
                using 2% allocation{' '}
              </p>
              <p>- Build out token website and social media channels</p>
              <p>- Onboard initial development team using 5% allocation </p>
              <p>- Begin developing dApp and smart contract integrations</p>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 xl:w-1/3 px-5">
          <div className="rounded h-full flex flex-col">
            <div className="flex min-h-52">
              <img
                className="w-full object-cover max-h-64 object-center"
                src="/images/pi_stage2.jpg"
                alt="roadmap-1"
              />
            </div>
            <div className="p-5 text-xl dark:bg-slate-700 bg-slate-400 leading-relaxed h-full">
              <h1 className="text-yellow text-2xl font-bold pb-5">Stage 2</h1>
              <p>- Get listed on initial exchange listings</p>
              <p>
                - Expand marketing and community building efforts using 4%
                allocation
              </p>
              <p>- Continue developing dApp and smart contract integrations</p>
              <p>
                - Apply for additional exchange listings (KuCoin, ByBit, Gate)
                using 4% allocation
              </p>
              <p>- Launch staking and rewards program (if applicable)</p>
              <p>- Expand development team as needed</p>
            </div>
          </div>
        </div>
        <div className="mt-10 xl:mt-0 lg:w-1/2 xl:w-1/3 px-5">
          <div className="rounded h-full flex flex-col">
            <div className="flex min-h-52">
              <img
                className="w-full object-cover max-h-64 object-center"
                src="/images/pi_stage3.jpg"
                alt="roadmap-1"
              />
            </div>
            <div className="p-5 text-xl dark:bg-slate-700 bg-slate-400 leading-relaxed h-full">
              <h1 className="text-yellow text-2xl font-bold pb-5">Stage 3</h1>
              <p>
                - Apply for additional exchange listings (Conbase, OKX) using 5%
                allocation
              </p>
              <p>- Fully launch dApp and smart contract integrations</p>
              <p>
                - Integrate token into ecosystem of decentralized applications
              </p>
              <p>- Expand team as the ecosystem grows</p>
              <p>- Continue listing on new exchanges as opportunities arise</p>
              <p>- 50,000 holders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Roadmap
