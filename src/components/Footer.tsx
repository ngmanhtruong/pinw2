import React from 'react'

type FooterProps = {}
const Footer = React.forwardRef<HTMLDivElement, FooterProps>((_, ref) => {
  return (
    <div ref={ref} className="pt-10 px-10">
      <nav>
        <div>
          <p className="text-yellow text-6xl text-center font-bold">
            Contact Us
          </p>
        </div>
        {/* Create footer navigations with icons twitter, tiktok, telegram */}
        <div className="flex justify-center mt-10 mb-10">
          <a
            href="https://twitter.com/pi_network_v2?s=21"
            target="_blank"
            rel="noreferrer"
            className="opacity-70 hover:opacity-100 mx-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <img
              className="invert-images w-10"
              src="/images/twitter.svg"
              alt="Twitter"
            />
          </a>
          <a
            href="https://www.tiktok.com/@pinetwork_v2.0?_t=8dqFVu6xpEA&_r=1"
            target="_blank"
            rel="noreferrer"
            className="opacity-70 hover:opacity-100 mx-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <img
              className="invert-images w-10"
              src="/images/tiktok.svg"
              alt="Tiktok"
            />
          </a>
          <a
            href="https://t.me/pi_network_v2"
            target="_blank"
            rel="noreferrer"
            className="opacity-70 hover:opacity-100 mx-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <img
              className="invert-images w-10"
              src="/images/telegram.svg"
              alt="Telegram"
            />
          </a>
        </div>
      </nav>
      <div className="pt-5 pb-10">
        <p className="text-center font-bold text-xl text-yellow">
          pinetworkv2.0@gmail.com
        </p>
        <p className="text-center text-base">© 2023 Pi Network V2</p>
      </div>
    </div>
  )
})

export default Footer
