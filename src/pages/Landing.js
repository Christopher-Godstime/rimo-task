import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import big from "../assets/big.png";
import small from "../assets/small.png";
import e1 from "../assets/e1.png";
import e2 from "../assets/e2.png";
import e3 from "../assets/e3.png";
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import e4 from "../assets/e4.png";
import e5 from "../assets/e5.png";
import profile from "../assets/profile.png";
import profile2 from "../assets/profile2.png";
import e6 from "../assets/e6.png";
import e7 from "../assets/e7.png";
import e8 from "../assets/e8.png";
import { BsSoundwave } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { TbMicrophone2 } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { MdOutlineWifiTethering } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
// import { SlBadge } from "react-icons/si";

const Landing = () => {
  return (
    <div className="h-[calc(100vh)] overflow-y-auto overflow-x-auto w-full">
      <div className=" flex  text-white">
        <div className=" py-[20px] px-[20px] ">
          <div className="flex justify-between items-center w-full gap-[100px]">
            <div className="w-full relative">
              <input
                className="py-[10px] rounded-[10px] w-[100%] pr-[60px] pl-[15px] "
                placeholder="Search by podcast name, home name, categories"
              />
              <div className="absolute top-[7px] right-[10px]">
                <AiOutlineSearch className="text-[20px]" />
              </div>
            </div>
            <div className="flex w-[60%] gap-[10px] items-center">
              <button className="text-primary  border-primary border-[1px] w-[230px] rounded-[15px] flex items-center justify-center py-[10px] gap-[5px]">
                <img src={b1} />
                Download the app
              </button>
              <NavLink to="/register">
                <button className="bg-primary  text-[14px] text-white  px-[8px] rounded-[10px] w-[150px] flex items-center justify-center py-[10px] gap-[5px]">
                  <img src={b2} />
                  SIGN UP
                </button>
              </NavLink>
              <NavLink to="/login">
                <button className="bg-black  text-[14px] text-white   px-[8px] rounded-[10px] border-[1px] border-white w-[150px] flex items-center justify-center py-[10px] gap-[5px]">
                  <img src={b3} />
                  LOG IN
                </button>
              </NavLink>
            </div>
          </div>

          <div>
            <div className="flex gap-[5px] mt-[30px] items-center">
              <AiFillStar className="text-secondary text-[20px]" />
              <h4 className="text-[18px] font-medium">Pick of the week</h4>
            </div>

            <div className="flex w-full gap-[30px]">
              <div className="mt-[20px] w-[50%] ">
                <div className="relative">
                  <img className=" " src={big} />
                  <button className="bg-secondary absolute bottom-[20px] right-[20px] text-[14px] p-[10px] rounded-[20px] flex items-center gap-[10px]">
                    LISTEN NOW <AiOutlinePlayCircle className="text-[20px]" />
                  </button>
                </div>
              </div>
              <div className="w-[50%] mt-[20px]">
                <div className="flex justify-between items-center">
                  <h4 className="text-[20px] font-medium"> Top podcasts</h4>
                  <h4 className="text-primary">See all</h4>
                </div>
                <div className="mt-[10px] ">
                  <div className="flex flex-nowrap overflow-x-auto gap-[10px] w-[400px] xl:w-full">
                    <div className="w-[350px] bg-gray-800 rounded-[5px]">
                      <img src={small} />
                      <div className="mx-[10px] mb-[10px]">
                        <h4 className="font-semibold">WTF</h4>
                        <h4 className="text-[14px]">By: Mrc Moron</h4>
                        <div className="flex items-center gap-[5px] mt-[5px] mb-[10px]">
                          <BiSolidCategory className="text-red-500" />
                          <h4 className="text-gray-500">Entertainment</h4>
                        </div>
                      </div>
                    </div>

                    <div className="w-[350px] bg-gray-800 rounded-[5px]">
                      <img src={small} />
                      <div className="mx-[10px] mb-[10px]">
                        <h4 className="font-semibold">WTF</h4>
                        <h4 className="text-[14px]">By: Mrc Moron</h4>
                        <div className="flex items-center gap-[5px] mt-[5px] mb-[10px]">
                          <BiSolidCategory className="text-red-500" />
                          <h4 className="text-gray-500">Entertainment</h4>
                        </div>
                      </div>
                    </div>

                    <div className="w-[350px] bg-gray-800 rounded-[5px]">
                      <img src={small} />
                      <div className="mx-[10px] mb-[10px]">
                        <h4 className="font-semibold">WTF</h4>
                        <h4 className="text-[14px]">By: Mrc Moron</h4>
                        <div className="flex items-center gap-[5px] mt-[5px] mb-[10px]">
                          <BiSolidCategory className="text-red-500" />
                          <h4 className="text-gray-500">Entertainment</h4>
                        </div>
                      </div>
                    </div>

                    <div className="w-[350px] bg-gray-800 rounded-[5px]">
                      <img src={small} />
                      <div className="mx-[10px] mb-[10px]">
                        <h4 className="font-semibold">WTF</h4>
                        <h4 className="text-[14px]">By: Mrc Moron</h4>
                        <div className="flex items-center gap-[5px] mt-[5px] mb-[10px]">
                          <BiSolidCategory className="text-red-500" />
                          <h4 className="text-gray-500">Entertainment</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[20px] p-[20px] bg-gray-800 rounded-[10px] relative flex-nowrap overflow-x-auto gap-[10px] w-[1000px] xl:w-full">
            <div className="absolute flex text-primary inset-0 items-center justify-end right-[20px] gap-[5px]">
              <h4 className="text-[14px] font-medium">See all categories</h4>
              <AiOutlineRight className="text-[16px]" />
            </div>
            <div className="flex  gap-[10px] items-center">
              <MdOutlineWifiTethering className="text-[20px]" />
              <h4 className="text-[18px] font-semibold">Top categories</h4>
            </div>
            <div className="mt-[20px] flex gap-[20px] ">
              <button className="flex items-center gap-[3px] bg-gray-600 w-fit py-[10px] px-[15px] rounded-[15px]">
                <img className="w-[20px]" src={e1} />
                <h4 className="text-[14px]">Comedy</h4>
              </button>
              <button className="flex items-center gap-[3px] bg-gray-600 w-fit py-[10px] px-[15px] rounded-[15px]">
                <img className="w-[20px]" src={e2} />
                <h4 className="text-[14px]">Health & Fitness</h4>
              </button>
              <button className="flex items-center gap-[3px] bg-gray-600 w-fit py-[10px] px-[15px] rounded-[15px]">
                <img className="w-[20px]" src={e3} />
                <h4 className="text-[14px]">Love & Romance</h4>
              </button>
              <button className="flex items-center gap-[3px] bg-gray-600 w-fit py-[10px] px-[15px] rounded-[15px]">
                <img className="w-[20px]" src={e4} />
                <h4 className="text-[14px]">Education</h4>
              </button>
              <button className="flex items-center gap-[3px] bg-gray-600 w-fit py-[10px] px-[15px] rounded-[15px]">
                <img className="w-[20px]" src={e5} />
                <h4 className="text-[14px]">Religion</h4>
              </button>
            </div>
            <div className="mt-[20px] flex gap-[20px] ">
              <button className="flex items-center gap-[3px] bg-gray-600 w-fit py-[10px] px-[15px] rounded-[15px]">
                <img className="w-[20px]" src={e6} />
                <h4 className="text-[14px]">Music</h4>
              </button>
              <button className="flex items-center gap-[3px] bg-gray-600 w-fit py-[10px] px-[15px] rounded-[15px]">
                <img className="w-[20px]" src={e8} />
                <h4 className="text-[14px]">Technology</h4>
              </button>
              <button className="flex items-center gap-[3px] bg-gray-600 w-fit py-[10px] px-[15px] rounded-[15px]">
                <img className="w-[20px]" src={e7} />
                <h4 className="text-[14px]">Government & Politics</h4>
              </button>
            </div>
          </div>
          <div>
            <div className="mt-[10px]">
              <h4 className="text-[22px] font-semibold">
                Podcast host suggestions
              </h4>
              <h4 className="text-gray-400">#Editor's choice</h4>
            </div>
            <div className="flex text-black mt-[15px] gap-[15px]">
              <div className="bg-white py-[12px] px-[15px] rounded-[3px]">
                <div className="flex justify-center">
                  <img src={profile} />
                </div>
                <h4 className="text-[18px] font-bold my-[3px]">Mark Bean</h4>
                <h4 className="text-[14px]">Host of:</h4>
                <h4 className="text-[14px]">The Joe Rogan Expererience</h4>
                <button className="bg-gray-100 w-full py-[5px] border-[2px] border-blue-400 mt-[5px] rounded-[20px] font-bold">
                  Follow
                </button>
              </div>

              <div className="bg-white py-[12px] px-[15px] rounded-[3px]">
                <div className="flex justify-center">
                  <img src={profile} />
                </div>
                <h4 className="text-[18px] font-bold my-[3px]">Mark Bean</h4>
                <h4 className="text-[14px]">Host of:</h4>
                <h4 className="text-[14px]">The Joe Rogan Expererience</h4>
                <button className="bg-gray-100 w-full py-[5px] border-[2px] border-blue-400 mt-[5px] rounded-[20px] font-bold">
                  Follow
                </button>
              </div>

              <div className="bg-white py-[12px] px-[15px] rounded-[3px]">
                <div className="flex justify-center">
                  <img src={profile} />
                </div>
                <h4 className="text-[18px] font-bold my-[3px]">Mark Bean</h4>
                <h4 className="text-[14px]">Host of:</h4>
                <h4 className="text-[14px]">The Joe Rogan Expererience</h4>
                <button className="bg-gray-100 w-full py-[5px] border-[2px] border-blue-400 mt-[5px] rounded-[20px] font-bold">
                  Follow
                </button>
              </div>
              <div className="bg-white py-[12px] px-[15px] rounded-[3px]">
                <div className="flex justify-center">
                  <img src={profile} />
                </div>
                <h4 className="text-[18px] font-bold my-[3px]">Mark Bean</h4>
                <h4 className="text-[14px]">Host of:</h4>
                <h4 className="text-[14px]">The Joe Rogan Expererience</h4>
                <button className="bg-gray-100 w-full py-[5px] border-[2px] border-blue-400 mt-[5px] rounded-[20px] font-bold">
                  Follow
                </button>
              </div>
            </div>
          </div>

          <div className="mt-[50px]">
            <div className="mt-[10px]">
              <h4 className="text-[22px] font-semibold">
                Discover other listeners
              </h4>
              <h4 className="text-gray-400">
                We are building a community of podcast lovers
              </h4>
              <h4 className="text-gray-400">#suggest for you</h4>
            </div>
            <div className="grid grid-cols-4 text-black mt-[15px] gap-[15px]">
              <div className="bg-white py-[12px] px-[15px] rounded-[3px]">
                <div className="flex justify-center">
                  <img className="w-[170px]" src={profile2} />
                </div>
                <h4 className="text-[18px] font-bold my-[3px] flex justify-center">
                  Sarah Leah
                </h4>
                <h4 className="text-[14px] flex justify-center">
                  Suggested for you
                </h4>
                <h4 className="text-[14px] flex justify-center">
                  Member since May 4, 2022
                </h4>
                <button className="bg-gray-100 w-full py-[5px] border-[2px] border-blue-400 mt-[5px] rounded-[20px] font-bold">
                  Follow
                </button>
              </div>

              <div className="bg-white py-[12px] px-[15px] rounded-[3px]">
                <div className="flex justify-center">
                  <img className="w-[170px]" src={profile2} />
                </div>
                <h4 className="text-[18px] font-bold my-[3px] flex justify-center">
                  Sarah Leah
                </h4>
                <h4 className="text-[14px] flex justify-center">
                  Suggested for you
                </h4>
                <h4 className="text-[14px] flex justify-center">
                  Member since May 4, 2022
                </h4>
                <button className="bg-gray-100 w-full py-[5px] border-[2px] border-blue-400 mt-[5px] rounded-[20px] font-bold">
                  Follow
                </button>
              </div>

              <div className="bg-white py-[12px] px-[15px] rounded-[3px]">
                <div className="flex justify-center">
                  <img className="w-[170px]" src={profile2} />
                </div>
                <h4 className="text-[18px] font-bold my-[3px] flex justify-center">
                  Sarah Leah
                </h4>
                <h4 className="text-[14px] flex justify-center">
                  Suggested for you
                </h4>
                <h4 className="text-[14px] flex justify-center">
                  Member since May 4, 2022
                </h4>
                <button className="bg-gray-100 w-full py-[5px] border-[2px] border-blue-400 mt-[5px] rounded-[20px] font-bold">
                  Follow
                </button>
              </div>

              <div className="bg-white py-[12px] px-[15px] rounded-[3px]">
                <div className="flex justify-center">
                  <img className="w-[170px]" src={profile2} />
                </div>
                <h4 className="text-[18px] font-bold my-[3px] flex justify-center">
                  Sarah Leah
                </h4>
                <h4 className="text-[14px] flex justify-center">
                  Suggested for you
                </h4>
                <h4 className="text-[14px] flex justify-center">
                  Member since May 4, 2022
                </h4>
                <button className="bg-gray-100 w-full py-[5px] border-[2px] border-blue-400 mt-[5px] rounded-[20px] font-bold">
                  Follow
                </button>
              </div>

              <div className="bg-white py-[12px] px-[15px] rounded-[3px]">
                <div className="flex justify-center">
                  <img className="w-[170px]" src={profile2} />
                </div>
                <h4 className="text-[18px] font-bold my-[3px] flex justify-center">
                  Sarah Leah
                </h4>
                <h4 className="text-[14px] flex justify-center">
                  Suggested for you
                </h4>
                <h4 className="text-[14px] flex justify-center">
                  Member since May 4, 2022
                </h4>
                <button className="bg-gray-100 w-full py-[5px] border-[2px] border-blue-400 mt-[5px] rounded-[20px] font-bold">
                  Follow
                </button>
              </div>

              <div className="bg-white py-[12px] px-[15px] rounded-[3px]">
                <div className="flex justify-center">
                  <img className="w-[170px]" src={profile2} />
                </div>
                <h4 className="text-[18px] font-bold my-[3px] flex justify-center">
                  Sarah Leah
                </h4>
                <h4 className="text-[14px] flex justify-center">
                  Suggested for you
                </h4>
                <h4 className="text-[14px] flex justify-center">
                  Member since May 4, 2022
                </h4>
                <button className="bg-gray-100 w-full py-[5px] border-[2px] border-blue-400 mt-[5px] rounded-[20px] font-bold">
                  Follow
                </button>
              </div>

              <div className="bg-white py-[12px] px-[15px] rounded-[3px]">
                <div className="flex justify-center">
                  <img className="w-[170px]" src={profile2} />
                </div>
                <h4 className="text-[18px] font-bold my-[3px] flex justify-center">
                  Sarah Leah
                </h4>
                <h4 className="text-[14px] flex justify-center">
                  Suggested for you
                </h4>
                <h4 className="text-[14px] flex justify-center">
                  Member since May 4, 2022
                </h4>
                <button className="bg-gray-100 w-full py-[5px] border-[2px] border-blue-400 mt-[5px] rounded-[20px] font-bold">
                  Follow
                </button>
              </div>

              <div className="bg-white py-[12px] px-[15px] rounded-[3px]">
                <div className="flex justify-center">
                  <img className="w-[170px]" src={profile2} />
                </div>
                <h4 className="text-[18px] font-bold my-[3px] flex justify-center">
                  Sarah Leah
                </h4>
                <h4 className="text-[14px] flex justify-center">
                  Suggested for you
                </h4>
                <h4 className="text-[14px] flex justify-center">
                  Member since May 4, 2022
                </h4>
                <button className="bg-gray-100 w-full py-[5px] border-[2px] border-blue-400 mt-[5px] rounded-[20px] font-bold">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
