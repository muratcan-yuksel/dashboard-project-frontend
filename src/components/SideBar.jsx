import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt as DashboardIcon,
  FaUsers as UsersIcon,
  FaBox as PackageIcon,
  FaShoppingCart as CartIcon,
  FaChartBar as ChartIcon,
  FaBars as MenuIcon,
  FaTimes as CloseIcon,
  FaUser as UserIcon,
} from "react-icons/fa";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    {
      name: "Dashboard",
      icon: <DashboardIcon size={20} />,
      path: "/",
    },
    {
      name: "Customers",
      icon: <UsersIcon size={20} />,
      path: "/customers",
    },
    {
      name: "Products",
      icon: <PackageIcon size={20} />,
      path: "/products",
    },
    {
      name: "Orders",
      icon: <CartIcon size={20} />,
      path: "/orders",
    },
    {
      name: "Reports",
      icon: <ChartIcon size={20} />,
      path: "/reports",
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-700 text-white md:hidden"
      >
        {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-slate-800 text-white transition-all duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        style={{ width: isMobile ? "16rem" : "16rem" }}
      >
        <div className="h-full flex flex-col">
          {/* Logo/Brand */}
          <div className="p-4 border-b border-slate-700 flex items-center justify-center">
            <h1
              className={`text-xl font-bold ${isMobile ? "block" : "hidden"}`}
            >
              Dashboard
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-2">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center p-3 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-slate-700"
                    }`}
                    onClick={() => isMobile && toggleSidebar()}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span
                      className={`ml-3 ${
                        isMobile ? "block" : "hidden md:block"
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* User/Settings */}
          <div className="p-4 border-t border-slate-700">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center">
                <UserIcon className="text-xs" />
              </div>
              <div className={`ml-3 ${isMobile ? "block" : "hidden md:block"}`}>
                <p className="text-sm font-medium">Admin</p>
                <p className="text-xs text-slate-400">admin@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Add padding to main content when sidebar is open */}
      {isOpen && !isMobile && (
        <div style={{ width: "16rem" }} className="flex-shrink-0" />
      )}
    </>
  );
};

export default SideBar;
