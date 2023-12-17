import paperImg from "./../../assets/header/paper.png";
import searchImg from "./../../assets/header/search.png";
import settingsImg from "./../../assets/header/settings.png";
import bellImg from "./../../assets/header/bell.png";
import userImg from "./../../assets/header/user.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#6941C6] py-4 px-0">
      <div className="container mx-auto">
        <div className="flex justify-between gap-10">
          <div className="flex items-center gap-3">
            <img src={paperImg} alt="paper image" />
            <h1 className="text-[#FFF] font-Inter text-[20px] font-bold">
              Stack
            </h1>
          </div>
          <ul className="flex grow items-center">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
