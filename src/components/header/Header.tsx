import paperImg from "./../../assets/header/paper.png";
import searchImg from "./../../assets/header/search.png";
import settingsImg from "./../../assets/header/settings.png";
import bellImg from "./../../assets/header/bell.png";
import userImg from "./../../assets/header/user.png";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [close, setClose] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(true);
  function handleMenu() {
    setClose((prev) => !prev);
    setOpen((prev) => !prev);
  }
  return (
    <div className="bg-[#6941C6] py-4 px-0 relative">
      <div className="container mx-auto">
        <div className="flex justify-between gap-10">
          <div className="flex items-center gap-3">
            <img src={paperImg} alt="paper image" />
            <h1 className="text-[#FFF] font-Inter text-[20px] font-bold">
              Stack
            </h1>
          </div>
          <ul className="hidden md:flex grow items-center">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F4EBFF] font-Inter text-base font-[500] py-2 px-3 bg-[#7F56D9] rounded-md"
                    : "text-[#F4EBFF] font-Inter text-base font-[500] py-2 px-3"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F4EBFF] font-Inter text-base font-[500] py-2 px-3 bg-[#7F56D9] rounded-md"
                    : "text-[#F4EBFF] font-Inter text-base font-[500] py-2 px-3"
                }
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F4EBFF] font-Inter text-base font-[500] py-2 px-3 bg-[#7F56D9] rounded-md"
                    : "text-[#F4EBFF] font-Inter text-base font-[500] py-2 px-3"
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tasks"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F4EBFF] font-Inter text-base font-[500] py-2 px-3 bg-[#7F56D9] rounded-md"
                    : "text-[#F4EBFF] font-Inter text-base font-[500] py-2 px-3"
                }
              >
                Tasks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reporting"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F4EBFF] font-Inter text-base font-[500] py-2 px-3 bg-[#7F56D9] rounded-md"
                    : "text-[#F4EBFF] font-Inter text-base font-[500] py-2 px-3"
                }
              >
                Reporting
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <button type="button">
              <img src={searchImg} alt="search Image" />
            </button>
            <button type="button">
              <img src={settingsImg} alt="settings Image" />
            </button>
            <button type="button">
              <img src={bellImg} alt="bell Image" />
            </button>
            <div>
              <img src={userImg} alt="user Image" />
            </div>
          </div>

          {open ? (
            <div className="md:hidden flex items-center">
              <button onClick={handleMenu}>
                <GiHamburgerMenu size={24} className="text-[#fff]" />
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* small device menu  */}
      {close ? (
        <div className="md:hidden w-1/2 min-h-screen bg-[#6941C6] absolute top-0 left-0 z-10 px-6 py-4 transition-all duration-1000 ease-linear">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <img src={paperImg} alt="paper image" />
              <h1 className="text-[#FFF] font-Inter text-[20px] font-bold">
                Stack
              </h1>
            </div>
            <button className="text-white" onClick={handleMenu}>
              <IoCloseSharp size={24} />
            </button>
          </div>
          <ul className="flex flex-col gap-3 mt-3">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F4EBFF] font-Inter text-base font-[500] py-2 px-3 bg-[#7F56D9] rounded-md"
                    : "text-[#F4EBFF] font-Inter text-base font-[500] py-2 px-3"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F4EBFF] font-Inter text-base font-[500] py-2 px-3 bg-[#7F56D9] rounded-md"
                    : "text-[#F4EBFF] font-Inter text-base font-[500] py-2 px-3"
                }
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F4EBFF] font-Inter text-base font-[500] py-2 px-3 bg-[#7F56D9] rounded-md"
                    : "text-[#F4EBFF] font-Inter text-base font-[500] py-2 px-3"
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tasks"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F4EBFF] font-Inter text-base font-[500] py-2 px-3 bg-[#7F56D9] rounded-md"
                    : "text-[#F4EBFF] font-Inter text-base font-[500] py-2 px-3"
                }
              >
                Tasks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reporting"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F4EBFF] font-Inter text-base font-[500] py-2 px-3 bg-[#7F56D9] rounded-md"
                    : "text-[#F4EBFF] font-Inter text-base font-[500] py-2 px-3"
                }
              >
                Reporting
              </NavLink>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
