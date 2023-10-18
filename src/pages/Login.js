import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/actions/authAction";
import { useNavigate, Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Login = () => {
  const { auth, alert } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.token) navigate("/home");
  }, [auth.token, navigate]);

  const initialState = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

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
    dispatch(login(userData));
  };

  return (
    <div className="bg-black font-lato h-screen flex items-center">
      <div className="bg-secondary01  md:px-[30px] font-poppins     md:pb-[50px] pb-[100px] bg-black justify-center items-center mx-auto w-[95%] px-[16px] md:w-[50%]  py-[48px] ">
        <div className="font-poppins lg:px-10  mx-auto lg:my-0">
          <h4 className="text-white text-[18px] font-medium flex justify-center">
            Log in with email
          </h4>
          <form className="mt-[15px]" onSubmit={handleSubmit}>
            <div className="">
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
            </div>

            <div className=" mt-[64px]">
              <button
                type="submit"
                className="text-white text-sm font-medium bg-primary01 w-full h-[55px] bg-primary rounded-[30px]"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
