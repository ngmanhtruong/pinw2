import React from 'react'
import RIGHT_ARROW from '../assets/right-arrow.png'

type AboutProps = {}
const About = React.forwardRef<HTMLDivElement, AboutProps>((props, ref) => {
  return (
    <div
      className="flex flex-col-reverse py-20 lg:flex-row lg:gap-20 lg:items-center"
      ref={ref}
    >
      <div className="lg:w-2/5">
        <p className="gradient-text bg-gradient-to-r from-lightGray to-blue text-blue italic text-4xl leading-10 text-left mt-6">
          <img src={RIGHT_ARROW} alt="right arrow" className="inline-block" />{' '}
          Faster and more efficient transactions
        </p>
        <p className="gradient-text bg-gradient-to-r from-lightGray to-blue text-blue italic text-4xl leading-10 text-left mt-6">
          <img src={RIGHT_ARROW} alt="right arrow" className="inline-block" />{' '}
          Improved security
        </p>
        <p className="gradient-text bg-gradient-to-r from-lightGray to-blue text-blue italic text-4xl leading-10 text-left mt-6">
          <img src={RIGHT_ARROW} alt="right arrow" className="inline-block" />{' '}
          Better user experience
        </p>
        <p className="gradient-text bg-gradient-to-r from-lightGray to-blue text-blue italic text-4xl leading-10 text-left mt-6">
          <img src={RIGHT_ARROW} alt="right arrow" className="inline-block" />{' '}
          Opportunity for early adoption
        </p>
      </div>
      <div className="mt-10 lg:mt-0 lg:w-3/5 lg:pr-10">
        <h1 className="text-yellow text-6xl font-bold leading-tight">
          Welcome to Pi network V2
        </h1>
        <p className="pt-10 text-xl leading-relaxed">
          Are you ready to join Pi network V2? <br />
          Get ready to join Pi network V2 - the innovative cryptocurrency aiming
          to make digital money more{' '}
          <span className="text-blue">accessible for everyone.</span>
        </p>
        <br />
        <p className="pt-5 text-xl leading-relaxed">
          Pi network V2 aims to improve upon the original Pi network by offering
          <span className="text-blue">faster transactions</span>,{' '}
          <span className="text-blue">higher security</span> and more
          decentralization through an upgraded blockchain. The goal is to create
          a cryptocurrency that can truly gain{' '}
          <span className="text-blue">mainstream adoption.</span>
        </p>
        <br />
        <p className="pt-5 text-xl leading-relaxed">
          Pi network V2 aims to show that cryptocurrency does not need to be
          complicated, exclusive or environmentally harmful. With the right
          design choices, digital money can achieve{' '}
          <span className="text-blue">global scale</span> while remaining
          accessible, inclusive and sustainable.
        </p>
      </div>
    </div>
  )
})

export default About
