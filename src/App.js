import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Alert from "./components/alert/Alert";
import Home from "./pages/Home";

function App() {
  const [show, setShow] = useState(false);
  const auth = true;

  return (
    <Router>
      <Alert />
      <AppContent show={show} setShow={setShow} auth={auth} />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [show, setShow] = useState(false);
  const auth = true;
  return (
    <div className="font-lato">
      <div
        className={
          auth === true ? "font-lato lg:flex bg-[#212121] " : " font-lato "
        }
      >
        {isHomePage && (
          <div
            className={
              auth === true
                ? "lg:w-[300px] min-w-[300px] visible  lg:h-[calc(100vh)] lg:overflow-y-auto lg:no-scrollbar"
                : "hidden"
            }
          >
            <Navbar show={show} setShow={setShow} />
          </div>
        )}
        <div
          className={
            show && auth === true
              ? "w-full fixed lg:relative "
              : "w-full overflow-x-auto"
          }
        >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
      <div className="bg-[#272727] text-white flex gap-[30px] py-[15px] pl-[20%]">
        <h4>Help</h4>
        <h4>Settings</h4>
      </div>
    </div>
  );
}

export default App;
