import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
export default function SideBar({ isSidebarExpanded }) {
  const { pathname } = useLocation();
  const [users, setUsers] = useState();

  const handleDropdownToggle = (id) => {
    // Handle dropdown toggle logic
  };

  const handleActivePage = (id) => {
    // Handle active page logic
  };

  const menus = [
    {
      id: "New",
      type: "group",
      label: "New",
      linkTo: undefined,
      hr: undefined,
      children: [
        // Submenus for "New" group
      ],
    },
    {
      id: "Dashboard",
      type: "item",
      label: "Dashboard",
      linkTo: "/dashboard",
      children: undefined,
      hr: <hr className="sidebar-divider my-[5px]" />,
    },
    // Other menu items...
  ];

  return (
    <>
      <div className="sidebar">
        <div
          className={`${
            isSidebarExpanded ? "px-5" : "min-w-[220px]"
          } bg-white h-full  max-lg:hidden text-gray-500`}
        >
          <Link
            to={"/"}
            className="logo flex items-center bg-white height-86px position-relative "
          >
            {isSidebarExpanded ? (
              <img
                src={""}
                alt="logo"
                className="w-9 h-10 m-3 pt-1"
              />
            ) : (
              <img
                src="#"
                alt="logo"
                width="150"
                height="45"
                data-logowidth="150"
                style={{ width: 150 }}
                className="m-4 pt-1"
              />
            )}
          </Link>
          <ul className=" menu-list cursor-pointer">
            {menus.map((menu) => {
              if (menu.type === "hr") return menu.hr;
              if (menu.id === "Admin" && menu.linkTo && users)
                return users.isAdmin ? (
                  <li
                    onClick={() => handleActivePage(menu.id)}
                    key={menu.id}
                    className={`${
                      pathname === menu.linkTo && `bg-blue-400 text-white`
                    } menu-item p-[0.5rem] m-[0.5rem] rounded-lg transition duration-200 ease-in-out hover:bg-gray-200`}
                  >
                    <Link
                      to={menu.linkTo}
                      className="flex items-center "
                    >
                      {menu.icon}
                      <span
                        className={`${
                          isSidebarExpanded && "hidden "
                        }text-base ml-2 `}
                      >
                        {menu.label}
                      </span>
                    </Link>
                  </li>
                ) : (
                  <React.Fragment key={menu.id} />
                );
              if (menu.type === "item" && menu.linkTo)
                return (
                  <li
                    onClick={() => handleActivePage(menu.id)}
                    key={menu.id}
                    className={`${
                      pathname === menu.linkTo && `bg-blue-400 text-white`
                    } menu-item  p-[0.5rem] m-[0.5rem] rounded-lg transition duration-200 ease-in-out hover:bg-gray-200`}
                  >
                    <Link
                      to={menu.linkTo}
                      className="flex items-center "
                    >
                      {menu.icon}
                      <span
                        className={`${
                          isSidebarExpanded && "hidden "
                        }text-base ml-2 `}
                      >
                        {menu.label}
                      </span>
                    </Link>
                  </li>
                );
              else if (menu.type === "group")
                return (
                  <li
                    tabIndex={0}
                    key={menu.id}
                    className={`${
                      pathname === menu.linkTo && `bg-blue-400 `
                    } menu-item flex items-center p-[0.5rem] m-[0.5rem] rounded-lg relative dropdown transition duration-200 ease-in-out hover:bg-gray-200 focus:bg-gray-200`}
                    onClick={() => handleDropdownToggle(menu.id)}
                  >
                    {menu.icon}
                    <span
                      className={`${
                        isSidebarExpanded && "hidden "
                      }text-base ml-2 `}
                    >
                      {menu.label}
                    </span>
                  </li>
                );
              return null;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
