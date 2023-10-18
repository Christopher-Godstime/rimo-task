import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../redux/actions/authAction";
import { useNavigate, NavLink } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Registration = () => {
  const { auth, alert } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    first_name: "",
    last_name: "",
    phone: "",
    country: "",
    state: "",
    email: "",
    password: "",
    address: "",
    password_confirmation: "",
    gender: "MALE",
  };
  const [userData, setUserData] = useState(initialState);
  const {
    first_name,
    last_name,
    phone,
    country,
    state,
    email,
    password,
    address,
    password_confirmation,
    gender,
  } = userData;

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const toggle1 = () => {
    setOpen1(!open1);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };

  return (
    <div className="bg-black font-poppins">
      <div className="bg-secondary01  md:px-[30px] font-poppins     md:pb-[50px] pb-[100px] bg-black justify-center items-center mx-auto w-[95%] px-[16px] md:w-[50%]  py-[48px] ">
        <div className="font-poppins lg:px-10  mx-auto lg:my-0">
          <form className="mt-[15px]" onSubmit={handleSubmit}>
            <div className="">
              <div className="mb-[24px]">
                <div className="flex justify-center">
                  <input
                    className="placeholder-white py-[18px] rounded-[30px] border-[3px] border-white bg-black text-sm text-white pl-[32px] w-full  "
                    autoComplete="on"
                    name="first_name"
                    type="text"
                    placeholder="Enter first name"
                    onChange={handleChangeInput}
                    value={first_name}
                    style={{
                      background: `${alert?.first_name ? "#F5B7B1 " : ""}`,
                    }}
                  />
                </div>
                <h2 className="text-red-300 text-sm font-light mt-[10px]">
                  {alert?.first_name ? alert?.first_name : ""}
                </h2>
              </div>
              <div className="mb-[24px]">
                <div className="flex justify-center">
                  <input
                    className="placeholder-white py-[18px] rounded-[30px] border-[3px] border-white bg-black text-sm text-white pl-[32px] w-full  "
                    autoComplete="on"
                    name="last_name"
                    type="text"
                    placeholder="Enter last name"
                    onChange={handleChangeInput}
                    value={last_name}
                    style={{
                      background: `${alert?.last_name ? "#F5B7B1 " : ""}`,
                    }}
                  />
                </div>
                <h2 className="text-red-300 text-sm font-light mt-[10px]">
                  {alert?.last_name ? alert?.last_name : ""}
                </h2>
              </div>
              <div className="mt-[15px]">
                <div className="flex justify-center">
                  <input
                    className="placeholder-white py-[18px] rounded-[30px] border-[3px] border-white bg-black text-sm text-white pl-[32px] w-full  "
                    autoComplete="on"
                    name="country"
                    type="text"
                    placeholder="Enter country"
                    onChange={handleChangeInput}
                    value={country}
                    style={{
                      background: `${alert?.country ? "#F5B7B1 " : ""}`,
                    }}
                  />
                </div>
                <h2 className="text-red-300 text-sm font-light mt-[10px]">
                  {alert?.country ? alert?.country : ""}
                </h2>
              </div>
              <div className="mt-[15px]">
                <div className="flex justify-center">
                  <input
                    className="placeholder-white py-[18px] rounded-[30px] border-[3px] border-white bg-black text-sm text-white pl-[32px] w-full  "
                    autoComplete="on"
                    name="address"
                    type="text"
                    placeholder="Enter address"
                    onChange={handleChangeInput}
                    value={address}
                    style={{
                      background: `${alert?.address ? "#F5B7B1 " : ""}`,
                    }}
                  />
                </div>
                <h2 className="text-red-300 text-sm font-light mt-[10px]">
                  {alert?.address ? alert?.address : ""}
                </h2>
              </div>
              <div className="mt-[15px]">
                <div className="flex justify-center">
                  <input
                    className="placeholder-white py-[18px] rounded-[30px] border-[3px] border-white bg-black text-sm text-white pl-[32px] w-full  "
                    autoComplete="on"
                    name="state"
                    type="text"
                    placeholder="Enter state"
                    onChange={handleChangeInput}
                    value={state}
                    style={{
                      background: `${alert?.state ? "#F5B7B1 " : ""}`,
                    }}
                  />
                </div>
                <h2 className="text-red-300 text-sm font-light mt-[10px]">
                  {alert?.state ? alert?.state : ""}
                </h2>
              </div>
              <div className="mt-[15px]">
                <div className="flex justify-center">
                  <input
                    className="placeholder-white py-[18px] rounded-[30px] border-[3px] border-white bg-black text-sm text-white pl-[32px] w-full  "
                    autoComplete="on"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    onChange={handleChangeInput}
                    value={email}
                    style={{
                      background: `${alert?.email ? "#F5B7B1 " : ""}`,
                    }}
                  />
                </div>
                <h2 className="text-red-300 text-sm font-light mt-[10px]">
                  {alert?.email ? alert?.email : ""}
                </h2>
              </div>

              <div className="mt-[15px]">
                <div className="flex justify-center">
                  <input
                    className="placeholder-white py-[18px] rounded-[30px] border-[3px] border-white bg-black text-sm text-white pl-[32px] w-full  "
                    autoComplete="on"
                    name="phone"
                    type="phone"
                    placeholder="Enter phone number"
                    onChange={handleChangeInput}
                    value={phone}
                    style={{
                      background: `${alert?.phone ? "#F5B7B1 " : ""}`,
                    }}
                  />
                </div>
                <h2 className="text-red-300 text-sm font-light mt-[10px]">
                  {alert?.phone ? alert?.phone : ""}
                </h2>
              </div>

              <div className="mt-[15px]">
                <div className="flex justify-center relative">
                  <input
                    className="placeholder-white py-[18px] rounded-[30px] border-[3px] border-white bg-black text-sm text-white pl-[32px] w-full  "
                    autoComplete="on"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    onChange={handleChangeInput}
                    value={password}
                    style={{
                      background: `${alert?.password ? "#F5B7B1 " : ""}`,
                    }}
                  />
                </div>
                <h2 className="text-red-300 text-sm font-light mt-[10px]">
                  {alert?.password ? alert?.password : ""}
                </h2>
              </div>
              <div className="mt-[15px]">
                <div className="flex justify-center relative">
                  <input
                    className="placeholder-white py-[18px] rounded-[30px] border-[3px] border-white bg-black text-sm text-white pl-[32px] w-full  "
                    autoComplete="on"
                    name="password_confirmation"
                    type="password"
                    placeholder="Enter your password_confirmation"
                    onChange={handleChangeInput}
                    value={password_confirmation}
                    style={{
                      background: `${
                        alert?.password_confirmation ? "#F5B7B1 " : ""
                      }`,
                    }}
                  />
                </div>
                <h2 className="text-red-300 text-sm font-light mt-[10px]">
                  {alert?.password_confirmation
                    ? alert?.password_confirmation
                    : ""}
                </h2>
              </div>

              <div className="mt-[15px] flex">
                <label
                  className="text-white flex items-center mr-[40px]"
                  htmlFor="gender"
                >
                  Gender:
                </label>
                <select
                  id="gender"
                  name="gender"
                  onChange={handleChangeInput}
                  className="text-black"
                >
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </select>
              </div>
            </div>

            <div className=" mt-[64px]">
              <button
                type="submit"
                className="text-white text-sm font-medium bg-primary01 w-full h-[55px] bg-primary rounded-[30px]"
              >
                Register
              </button>
            </div>
          </form>

          <div className="flex justify-center mt-[64px]">
            <h4 className="text-sm font-medium text-gray-400">
              Already have an account?
            </h4>
            <h4 className="text-sm font-medium text-blue-400  ml-1 ">
              <NavLink to="/login">Login Now</NavLink>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
