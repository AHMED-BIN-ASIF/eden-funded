import React from 'react'
import PlatformImg from "../assets/images/platform-5bg.webp";
import PayoutBg from "../assets/images/payout-bg.webp";

const TradingPlatforms = () => {
  return (
    <section className="py-28">
      <div className="max-w-full w-[96%] mx-auto px-4 text-center max-md:w-[90%]">
      <h2 className="text-5xl text-[#FDFEFE] font-medium mb-4 max-md:text-4xl">
      Trading Platforms
        </h2>
        {/* Section Subtitle */}
        <p className="text-lg text-white text-opacity-50 mb-20 max-w-[754px] mx-auto max-md:text-base">
        PropPalace offers top—tier trading platforms with fast transactions, advanced tools, and expert 
        support empowering you to trade with confidence and precision
        </p>
        <div className="rounded-[48px] p-10 min-h-[409px] flex flex-col items-center justify-center"
        style={{
            background: ` linear-gradient(180deg, rgba(24, 26, 56, 0.00) 0%, #181A38 100%), 
            linear-gradient(0deg, rgba(32, 158, 51, 0.32) 0%, rgba(32, 158, 51, 0.32) 100%), 
            url(${PlatformImg})  50% / cover no-repeat, rgba(121, 255, 157, 0.04)`
        }}>
            <span className="bg-gradient-to-b from-[#14FF57] to-[#01FE34] 
            bg-clip-text text-transparent text-6xl font-medium text-center font-syne">Platform 5</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
            <div className="rounded-[48px] border border-[#B6FFB9] border-opacity-10
            bg-gradient-to-b from-[#1CFF14] to-[#01FE1A] p-10 min-h-[409px]"
            style={{
                background: `url(${PayoutBg})no-repeat center / cover`
            }}></div>
            <div className="rounded-[48px] border border-[#B6FFB9] border-opacity-10
            bg-[rgba(255,255,255,0.02)] p-8 min-h-[409px] shadow-[inset_0px_24px_24px_-10px_rgba(1,132,254,0.04)] backdrop-blur-[210px]"></div>
        </div>
      </div>
    </section>
  )
}

export default TradingPlatforms
