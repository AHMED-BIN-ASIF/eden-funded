import React, { useState } from "react";
import Line from "../assets/images/mid-line.svg";
import InstantImg from "../assets/images/instant-card.webp";
import { Link } from "react-router-dom";

const Tabs = ["Standard", "Pro"];
const Steps = ["Instant", "Step 1", "Step 2", "Step 3"];
const Prices = ["$2.5", "$5k", "$10k", "$25k", "$50k", "$100k"];

const InstantFunding = () => {
  const [activeTab, setActiveTab] = useState("Standard");
  const [Step, setStep] = useState("Instant");
  const [Price, setPrice] = useState("$2.5");
  return (
    <section className="py-28">
      <div className="container max-w-[1620px]">
        <div className="text-center">
          <h2 className="heading-2 text-5xl text-customWhite mb-4 max-md:text-[32px]">
            Unlock Instant Funding
          </h2>
          <p className="text-[#CFD6D3] text-xl leading-[1.5] max-w-[754px] w-full mx-auto mb-10">
            Choose your path to funding—complete a challenge or get instant
            access to capital and start trading today!
          </p>
        </div>
      </div>
      {/* tabs  */}
      <div className="w-[95%] mx-auto">
        <ul className="grid grid-cols-1 mb-10  sm:grid-cols-2  gap-6 mx-auto max-w-[269px] p-2 rounded-[80px] border border-[rgba(255,255,255,0.05)]">
          {Tabs.map((instanttab) => (
            <li
              key={instanttab}
              className={` px-8 rounded-[58px] h-[50px] flex items-center justify-center  cursor-pointer transition-all duration-500 ease-in-out font-medium
          ${
            activeTab === instanttab
              ? "text-customDark bg-customGreen"
              : "text-customLightGreen"
          }`}
              onClick={() => setActiveTab(instanttab)}
            >
              {instanttab}
            </li>
          ))}
        </ul>
        <div className="rounded-[30px] border-2 border-[#B6FFB9] border-opacity-5 bg-[rgba(11,172,117,0.04)] backdrop-blur-[25px] p-10">
          <div className="rounded-[160px] border border-[#B6FFC0] border-opacity-5 bg-[rgba(11,172,117,0.02)] p-5 flex justify-between items-center flex-wrap">
            <div className="flex flex-wrap">
              {Steps.map((tab) => (
                <button
                  key={tab}
                  className={` relative px-8 py-[10px] h-[53px] rounded-[58px] flex items-center justify-center 
            transition-all duration-500 ease-in-out text-base text-center leading-none font-medium
            max-md:px-4 max-md:h-10 border  ${
              Step === tab
                ? "border-white border-opacity-5 text-white bg-[rgba(121,255,139,0.04)]"
                : "text-[#D8FFDA99] border-transparent bg-transparent"
            }`}
                  onClick={() => setStep(tab)}
                >
                  {tab}
                  {tab === "Instant" && (
                    <span
                      className="bg-[#0EF3A5] text-[#0F0F0F] rounded-[80px] h-[21px] text-[11px] leading-none 
    px-2 flex items-center absolute left-0 right-0 mx-auto top-[-11px] max-w-max"
                    >
                      New
                    </span>
                  )}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap">
              {Prices.map((pricetab) => (
                <button
                  key={pricetab}
                  className={` relative px-8 py-[10px] h-[53px] rounded-[58px] flex items-center justify-center 
            transition-all duration-500 ease-in-out text-base text-center leading-none font-medium
            max-md:px-4 max-md:h-10 border  ${
              Price === pricetab
                ? "border-white border-opacity-5 text-white bg-[rgba(121,255,139,0.04)]"
                : "text-[#D8FFDA99] border-transparent bg-transparent"
            }`}
                  onClick={() => setPrice(pricetab)}
                >
                  {pricetab}
                  {pricetab === "$100k" && (
                    <span
                      className="bg-[#0EF3A5] text-[#0F0F0F] rounded-[80px] h-[21px] text-[11px] leading-none 
    px-2 flex items-center absolute left-0 right-0 mx-auto top-[-11px] max-w-max"
                    >
                      New
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-6 mt-6">
            <div className="flex flex-col justify-center items-start gap-[40px] p-[32px] rounded-[30px] border border-[#B6FFC0] border-opacity-5 bg-[rgba(11,172,117,0.02)]">
              <div>
                <h3 className="text-white text-[40px] font-medium leading-[130%]">
                  Unlock Instant Funding
                </h3>
                <p className="text-[rgba(216,255,218,0.60)]  text-[18px] font-normal leading-[160%] max-w-[490px] mt-2">
                  Choose your path to funding—complete a challenge or get
                  instant access to capital and start trading today!
                </p>
              </div>
              <ul className="flex flex-col w-full gap-8">
                <li className="flex justify-between items-center w-full">
                  <span className="text-white text-[16px] font-medium leading-[100%]">
                    Maximum Daily Loss
                  </span>
                  <div className="w-full max-w-[60%] h-[1px]">
                    <img src={Line} alt="line" className="w-full" />
                  </div>
                  <span
                    className="flex flex-col justify-center items-center gap-[10px] h-[32px] px-[16px] py-[4px] rounded-[80px] bg-white/10
                  text-center text-white text-[16px] font-medium leading-[100%]"
                  >
                    3%
                  </span>
                </li>
                <li className="flex justify-between items-center w-full">
                  <span className="text-white text-[16px] font-medium leading-[100%]">
                    Maximum Loss
                  </span>
                  <div className="w-full max-w-[60%] h-[1px]">
                    <img src={Line} alt="line" className="w-full" />
                  </div>
                  <span
                    className="flex flex-col justify-center items-center gap-[10px] h-[32px] px-[16px] py-[4px] rounded-[80px] bg-white/10
                  text-center text-white text-[16px] font-medium leading-[100%]"
                  >
                    5%
                  </span>
                </li>
                <li className="flex justify-between items-center w-full">
                  <span className="text-white text-[16px] font-medium leading-[100%]">
                    Account Leverage
                  </span>
                  <div className="w-full max-w-[60%] h-[1px]">
                    <img src={Line} alt="line" className="w-full" />
                  </div>
                  <span
                    className="flex flex-col justify-center items-center gap-[10px] h-[32px] px-[16px] py-[4px] rounded-[80px] bg-white/10
                  text-center text-white text-[16px] font-medium leading-[100%]"
                  >
                    1:50
                  </span>
                </li>
                <li className="flex justify-between items-center w-full">
                  <span className="text-white text-[16px] font-medium leading-[100%]">
                    Payouts
                  </span>
                  <div className="w-full max-w-[60%] h-[1px]">
                    <img src={Line} alt="line" className="w-full" />
                  </div>
                  <span
                    className="flex flex-col justify-center items-center gap-[10px] h-[32px] px-[16px] py-[4px] rounded-[80px] bg-white/10
                  text-center text-white text-[16px] font-medium leading-[100%]"
                  >
                    Bi-Weekly
                  </span>
                </li>
                <li className="flex justify-between items-center w-full">
                  <span className="text-white text-[16px] font-medium leading-[100%]">
                    Profit Split
                  </span>
                  <div className="w-full max-w-[60%] h-[1px]">
                    <img src={Line} alt="line" className="w-full" />
                  </div>
                  <span
                    className="flex flex-col justify-center items-center gap-[10px] h-[32px] px-[16px] py-[4px] rounded-[80px] bg-white/10
                  text-center text-white text-[16px] font-medium leading-[100%]"
                  >
                    Up tp 95%
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col  overflow-hidden  rounded-[30px] border border-[#B6FFC0] border-opacity-5 bg-[rgba(11,172,117,0.02)]">
              <div
                className="w-full h-[247px]"
                style={{
                  background: `linear-gradient(180deg, rgba(24, 56, 25, 0.00) 0%, rgba(71, 193, 81, 0.30) 100%), 
                             linear-gradient(0deg, rgba(51, 158, 32, 0.20) 0%, rgba(51, 158, 32, 0.20) 100%), 
                             url(${InstantImg}) 0px -257.014px / 100% 230.162% no-repeat`,
                }}
              ></div>
              <div className="mt-[38px] p-8">
                <div className="flex justify-between items-center">
                <p className="text-[rgba(216,255,218,0.60)]  text-[16px] font-normal leading-[160%] max-w-[442px] ">
                  Bypass the challenge and receive instant funding. Begin your
                  journey as an Aquo Trader today, manage risks carefully, and
                  enjoy up to a 95% profit share.
                </p>
                <div className="flex flex-col flex-end gap-[4px] p-[12px_24px] rounded-[16px] border 
                border-white border-opacity-5 bg-[rgba(11,172,117,0.02)] mt-[-39px]">
                <div className="flex items-center gap-2 justify-end">
                <span className="text-white text-right text-[24px] font-bold leading-[130%]">
                $42
                </span>
                {/* cut price  */}
                <span className="
                text-[rgba(216,255,222,0.40)] text-right text-[16px] font-medium 
                leading-[130%] line-through">
                  $60
                  </span>
                </div>
                <span className="text-[rgba(216,255,222,0.40)] text-right text-[16px] font-medium leading-[130%]">For $2.5k Account</span>
                </div>
                </div>
                <ul className="grid grid-cols-1  sm:grid-cols-2  gap-6 mt-8">
                <li>
                    <Link
                      to="/"
                      className="btn font-syne text-customLightGreen bg-customTransparentWhite px-10"
                    >
                      Learn more
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="btn font-syne text-customDark bg-customGreen px-10"
                    >
                      
                      Get Funded
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstantFunding;
