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
          <div className="rounded-md overflow-hidden h-full flex flex-col">
            <div className="flex min-h-52">
              <img
                className="w-full object-cover max-h-80 lg:max-h-64 object-center"
                src="/images/pi_stage1.jpg"
                alt="roadmap-1"
              />
            </div>
            <div className="p-5 text-xl dark:bg-slate-700 bg-slate-400 leading-relaxed h-full">
              <h1 className="text-yellow text-2xl font-bold pb-5">Stage 1</h1>
              <p>
                <span className="text-green">✅</span> Build socials channel
              </p>
              <p>
                <span className="text-green">✅</span> Build website 1.0
              </p>
              <p>
                <span className="text-green">✅</span> Build great community
              </p>
              <p>
                <span className="text-green">✅</span> Create smart contract
                safe
              </p>
              <p>
                <span className="text-green">✅</span> Cooperate with exchanges
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 xl:w-1/3 px-5">
          <div className="rounded-md overflow-hidden h-full flex flex-col">
            <div className="flex min-h-52">
              <img
                className="w-full object-cover max-h-80 lg:max-h-64 object-center"
                src="/images/pi_stage2.jpg"
                alt="roadmap-1"
              />
            </div>
            <div className="p-5 text-xl dark:bg-slate-700 bg-slate-400 leading-relaxed h-full">
              <h1 className="text-yellow text-2xl font-bold pb-5">Stage 2</h1>
              <p>
                <span className="text-blue">💠</span> Partnerships with
                influencers
              </p>
              <p>
                <span className="text-blue">💠</span> Call group collaborations
                (200+ Group Telegram)
              </p>
              <p>
                <span className="text-blue">💠</span> Presale on Pinksale
              </p>
              <p>
                <span className="text-blue">💠</span> Tier 2 exchange listing
              </p>
              <p>
                <span className="text-blue">💠</span> CMC, CG Fastrack
              </p>
              <p>
                <span className="text-blue">💠</span> 5000 holders
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 xl:mt-0 lg:w-1/2 xl:w-1/3 px-5">
          <div className="rounded-md overflow-hidden h-full flex flex-col">
            <div className="flex min-h-52">
              <img
                className="w-full object-cover max-h-80 lg:max-h-64 object-center"
                src="/images/pi_stage3.jpg"
                alt="roadmap-1"
              />
            </div>
            <div className="p-5 text-xl dark:bg-slate-700 bg-slate-400 leading-relaxed h-full">
              <h1 className="text-yellow text-2xl font-bold pb-5">Stage 3</h1>
              <p>
                <span className="text-green">🟢</span> Buyback
              </p>
              <p>
                <span className="text-green">🟢</span> Marketing on Tiktok,
                Twitter
              </p>
              <p>
                <span className="text-green">🟢</span> Tier 1 exchange listing
              </p>
              <p>
                <span className="text-green">🟢</span> Website v2 launch
              </p>
              <p>
                <span className="text-green">🟢</span> 20,000+ holders
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Roadmap
