import React from 'react'

type TokenomicsProps = {}
const Tokenomics = React.forwardRef<HTMLDivElement, TokenomicsProps>(
  (props, ref) => {
    return (
      <div className="flex pl-10 py-20" ref={ref}>
        <div className="w-1/2">
          <h1 className="text-yellow text-6xl font-bold">Tokenomics</h1>
          <p className="py-10 text-xl font-bold text-lightGray">
            <span className="text-blue">0%</span> Taxes,{' '}
            <span className="text-blue">0%</span> Bullshit,{' '}
            <span className="text-blue">100%</span> Safe
          </p>
          <p className="pt-5 text-xl leading-snug">
            40% of the total tokens were used for the presale on{' '}
            <span className="text-blue">Pinksale</span>
          </p>
          <p className="pt-5 text-xl leading-snug">
            20% of the total tokens were used to form the liquidity pool in
            Uniswap, the LP tokens were then locked away for 1 year.
          </p>
          <p className="pt-5 text-xl leading-snug">
            The remaining 40% of tokens are held in a community wallet where the
            community has full decision making power on how it is spent:
          </p>
          <ul className="list-disc pl-10 pt-5 text-xl leading-snug">
            <li>
              2% - For listing on <span className="text-blue">Bitmart</span>{' '}
              exchange
            </li>
            <li>
              2% - For listing on <span className="text-blue">Gemini</span>{' '}
              exchange
            </li>
            <li>
              4% - For listing on <span className="text-blue">ByBit</span>{' '}
              exchange
            </li>
            <li>
              4% - For listing on <span className="text-blue">Gate</span>{' '}
              exchange
            </li>
            <li>
              4% - For listing on <span className="text-blue">Kucoin</span>{' '}
              exchange
            </li>
            <li>
              2% - For listing on <span className="text-blue">Mexc</span>{' '}
              exchange
            </li>
            <li>
              5% - For listing on <span className="text-blue">OKEX</span>{' '}
              exchange
            </li>
            <li>
              3% - For listing on <span className="text-blue">Houbi</span>{' '}
              exchange
            </li>
            <li>
              6% - For{' '}
              <span className="text-blue">marketing and community</span>{' '}
              development
            </li>
            <li>
              8% - For the <span className="text-blue">development team</span>,
              locked for 1 year
            </li>
          </ul>
          <p className="pt-5 text-xl leading-snug">
            Total supply: 100,000,000,000 tokens
          </p>
        </div>
        <div className="w-1/2"></div>
      </div>
    )
  }
)

export default Tokenomics
