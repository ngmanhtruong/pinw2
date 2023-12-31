import React from 'react'

type TeamProps = {}
const Team = React.forwardRef<HTMLDivElement, TeamProps>((props, ref) => {
  return (
    <div ref={ref} className="py-20 m-auto max-w-screen-xl">
      <h1 className="text-yellow text-6xl text-center font-bold pt-10">
        Pi Network V2 Team
      </h1>
      <div className="flex flex-wrap py-10 md:px-20">
        <div className="w-full lg:w-1/2 xl:w-1/3 py-5 px-2 flex flex-col items-center">
          <img
            src="/images/antoine.jpg"
            alt="Antoine"
            className="border-8 border-lightGray rounded-full w-full  max-w-lg"
          />
          <p className="text-yellow text-2xl text-center font-bold pt-10">
            Jimmy
          </p>
          <p className="text-blue text-xl text-center">Blockchain Developer</p>
          <p className="text-xl text-center pt-10">
            Jimmy is an American blockchain developer and entrepreneur. He
            started learning about Bitcoin in 2013 and has been involved in the
            crypto space ever since. Jimmy has worked on several blockchain
            projects and is currently focused on building decentralized
            applications on Ethereum.
          </p>
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/3 py-5 px-2 flex flex-col items-center">
          <img
            className="border-8 border-lightGray rounded-full w-full max-w-lg"
            src="/images/julian.png"
            alt="Julian"
          />
          <p className="text-yellow text-2xl text-center font-bold pt-10">
            James
          </p>
          <p className="text-blue text-xl text-center">Blockchain Developer</p>
          <p className="text-xl text-center pt-10">
            James is a blockchain developer from America. He has over 5 years of
            experience building decentralized applications and smart contracts
            on Ethereum. James specializes in security audits and optimization
            of blockchain code.
          </p>
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/3 py-5 px-2 flex flex-col items-center">
          <img
            className="border-8 border-lightGray rounded-full w-full  max-w-lg"
            src="/images/sofia.jpg"
            alt="Sofia"
          />
          <p className="text-yellow text-2xl text-center font-bold pt-10">
            Sofia
          </p>
          <p className="text-blue text-xl text-center">Blockchain Marketer</p>
          <p className="text-xl text-center pt-10">
            Sofia is a Spanish blockchain marketer and content writer. She has
            worked with several blockchain startups helping promote their
            projects through social media, blog posts, and other content
            marketing strategies. Sofia is skilled at explaining complex
            blockchain concepts in an easy-to-understand way.
          </p>
        </div>
      </div>
    </div>
  )
})

export default Team
