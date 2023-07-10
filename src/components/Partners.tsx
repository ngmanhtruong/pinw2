import React from 'react'

type PartnersProps = {}
const Partners = React.forwardRef<HTMLDivElement, PartnersProps>(
  (props, ref) => {
    return (
      <div className="py-20">
        <h1 className="text-yellow text-6xl text-center font-bold">Partners</h1>
        <div ref={ref} className="flex flex-wrap py-10 px-20">
          <div className="w-1/3 py-5 flex justify-center">
            <img
              className="invert w-full max-w-xs"
              src="/images/uniswap.png"
              alt="Uniswap"
            />
          </div>
          <div className="w-1/3 py-5 flex justify-center">
            <img
              className="invert w-full max-w-xs"
              src="/images/open-sea.png"
              alt="Open Sea"
            />
          </div>
          <div className="w-1/3 py-5 flex justify-center">
            <img
              className="invert w-full max-w-xs"
              src="/images/ave-ai.png"
              alt="Ave AI"
            />
          </div>
          <div className="w-1/3 py-5 flex justify-center">
            <img
              className="invert w-full max-w-xs"
              src="/images/dex-screener.png"
              alt="Dex Screener"
            />
          </div>
          <div className="w-1/3 py-5 flex justify-center">
            <img
              className="invert w-full max-w-xs"
              src="/images/dex-tools.png"
              alt="Dex Tools"
            />
          </div>
          <div className="w-1/3 py-5 flex justify-center">
            <img
              className="invert w-full max-w-xs"
              src="/images/dex-view.png"
              alt="Dex View"
            />
          </div>
        </div>
      </div>
    )
  }
)

export default Partners
