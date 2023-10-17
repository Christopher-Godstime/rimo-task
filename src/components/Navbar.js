import React, { useState } from "react";
import logo from "../assets/logo.png";
import big from "../assets/big.png";
import small from "../assets/small.png";
import heart from "../assets/heart.png";
import line from "../assets/line.png";
import plus from "../assets/plus.png";
import cat from "../assets/cat.png";
import { BsSoundwave } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { TbMicrophone2 } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { MdOutlineWifiTethering } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { AiFillCaretDown } from "react-icons/ai";

const Navbar = ({ show, setShow }) => {
  return (
    <div>
      <div className="bg-[#212121] lg:tall:h-screen lg:h-[calc(100vh+30rem)] relative hidden lg:block ">
        <div className=" bg-zinc-800 py-[10px]">
          <div className="mb-[20px] px-[15px]">
            <img className="w-[120px]" src={logo} />
          </div>
          <div className="text-white ">
            <div className="flex items-center gap-[10px] px-[15px] py-[10px] bg-gradient-to-r from-gray-500 to-black">
              <div className="bg-gray-700 p-[3px] rounded-[10px]">
                <BsSoundwave className="text-[30px]" />
              </div>
              <h4 className="text-[17px] font-medium">Discover</h4>
            </div>
          </div>
          <div className="text-white ">
            <div className="flex items-center gap-[10px] px-[15px] py-[10px] ">
              <div className="bg-gray-700 p-[3px] rounded-[10px]">
                <AiFillStar className="text-[30px]" />
              </div>
              <h4 className="text-[17px] font-medium">Top 50 podcasts</h4>
            </div>
          </div>
          <div className="text-white ">
            <div className="flex items-center gap-[10px] px-[15px] py-[10px] ">
              <div className="bg-gray-700 p-[3px] rounded-[10px]">
                <img className="w-[30px]" src={cat} />
              </div>
              <h4 className="text-[17px] font-medium">Category</h4>
            </div>
          </div>
          <div className="text-white ">
            <div className="flex items-center gap-[10px] px-[15px] py-[10px] ">
              <div className="bg-gray-700 p-[3px] rounded-[10px]">
                <TbMicrophone2 className="text-[30px]" />
              </div>
              <h4 className="text-[17px] font-medium">Top 50 podcasts</h4>
            </div>
          </div>
          <div className="px-[15px] py-[10px] text-white flex gap-[10px] items-center ">
            <h4 className="text-[18px] font-semibold">Your Library</h4>
            <AiFillCaretDown />
          </div>
          <div className="px-[15px] py-[10px] flex gap-[30px]">
            <div>
              <img className="w-[20px] " src={heart} />
            </div>
            <div>
              <img className="w-[20px] " src={line} />
            </div>
            <div>
              <img className="w-[20px] " src={plus} />
            </div>
          </div>
        </div>
        <div className="bg-white absolute bottom-[39px] ml-[32px] p-[12px] rounded-[20px] mt-[40px]">
          <img className="w-[111px]" src={logo} />
        </div>
      </div>
      <div className="pt-[12px] pb-[12px] md:px-[64px] px-[16px] bg-gray-700 block lg:hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className=" ">
              <img className="w-[88px]" src={logo} />
            </div>
          </div>
          <IoIosMenu
            onClick={() => setShow(!show)}
            className="text-white text-[40px]"
          />
        </div>
      </div>

      <div
        className={`fixed w-full h-full block lg:hidden ${
          show ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-500`}
        style={{
          minWidth: show ? "200px" : "",
          zIndex: show ? 50 : "",
          background: show ? "#0007" : "",
          color: show ? "white" : "",
          top: show ? 0 : 0,
        }}
      >
        <div
          className={`top-0 right-0 z-40 absolute overflow-y-auto lg:h-[calc(100vh+30rem)] bg-[#212121] w-3/4 h-screen pt-[50px]  xl:hidden ${
            show ? "translate-x-0" : "translate-x-full"
          } ease-in-out duration-500`}
        >
          <div className="relative h-full">
            <div className=" text-white flex justify-end mr-[16px] md:mr-[64px]">
              <IoCloseOutline
                onClick={() => setShow(!show)}
                className="text-white text-[40px] "
              />
            </div>

            <div className=" bg-zinc-800 py-[10px] h-full">
              <div className="mb-[20px] px-[15px]">
                <img className="w-[120px]" src={logo} />
              </div>
              <div className="text-white ">
                <div className="flex items-center gap-[10px] px-[15px] py-[10px] bg-gradient-to-r from-gray-500 to-black">
                  <div className="bg-gray-700 p-[3px] rounded-[10px]">
                    <BsSoundwave className="text-[30px]" />
                  </div>
                  <h4 className="text-[17px] font-medium">Discover</h4>
                </div>
              </div>
              <div className="text-white ">
                <div className="flex items-center gap-[10px] px-[15px] py-[10px] ">
                  <div className="bg-gray-700 p-[3px] rounded-[10px]">
                    <AiFillStar className="text-[30px]" />
                  </div>
                  <h4 className="text-[17px] font-medium">Top 50 podcasts</h4>
                </div>
              </div>
              <div className="text-white ">
                <div className="flex items-center gap-[10px] px-[15px] py-[10px] ">
                  <div className="bg-gray-700 p-[3px] rounded-[10px]">
                    <AiFillStar className="text-[30px]" />
                  </div>
                  <h4 className="text-[17px] font-medium">Category</h4>
                </div>
              </div>
              <div className="text-white ">
                <div className="flex items-center gap-[10px] px-[15px] py-[10px] ">
                  <div className="bg-gray-700 p-[3px] rounded-[10px]">
                    <TbMicrophone2 className="text-[30px]" />
                  </div>
                  <h4 className="text-[17px] font-medium">Top 50 podcasts</h4>
                </div>
              </div>
              <div className="text-white ">
                <div className="flex items-center gap-[10px] px-[15px] py-[10px] ">
                  <BsSoundwave className="text-[30px]" />
                  <h4 className="text-[17px] font-medium">Discover</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
