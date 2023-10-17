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
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
