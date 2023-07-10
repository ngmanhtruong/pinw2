import React from 'react'

type FooterProps = {}
const Footer = React.forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  return (
    <div ref={ref} className="pt-10 px-10">
      <nav>
        {/* Create footer navigations with icons twitter, tiktok, telegram */}
        <div className="flex justify-center">
          <a
            href="https://twitter.com/ave_ai"
            target="_blank"
            rel="noreferrer"
            className="mx-2"
          >
            <img
              className="invert w-10"
              src="/images/twitter.png"
              alt="Twitter"
            />
          </a>
          <a
            href="https://tiktok.com/@ave_ai"
            target="_blank"
            rel="noreferrer"
            className="mx-2"
          >
            <img
              className="invert w-10"
              src="/images/tiktok.png"
              alt="Tiktok"
            />
          </a>
          <a
            href="https://t.me/ave_ai"
            target="_blank"
            rel="noreferrer"
            className="mx-2"
          >
            <img
              className="invert w-10"
              src="/images/telegram.png"
              alt="Telegram"
            />
          </a>
        </div>
      </nav>
      <div className="pt-5">
        <p className="text-center font-bold text-xl text-yellow">
          pinetworkv2.0@gmail.com
        </p>
        <p className="text-center text-base">© 2023 Pi Network V2</p>
      </div>
    </div>
  )
})

export default Footer
