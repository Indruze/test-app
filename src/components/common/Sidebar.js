import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import {
  faHome,
  faEnvelope,
  faTruck,
  faFileAlt,
  faCog,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [t] = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  let navClasses =
    "w-72 max-w-full bg-gray-100 h-screen flex flex-col fixed lg:absolute lg:sticky top-0 transition-transform transform duration-500 ease";
    
  if (mobileOpen) navClasses += " translate-x-0";
  else navClasses += " -translate-x-full lg:translate-x-0";

  const linkClasses = "flex justify-between no-underline px-8 py-3 ml-4 hover:text-purple-500";
  const activeLinkClasses = "text-purple-500 bg-gray-50 rounded-l-full";

  return (
    <div className={navClasses}>
      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="absolute right-0 transform translate-x-double top-0 mt-5 text-3xl text-purple-500 cursor-pointer lg:hidden"
      />
      <a href="/" className="no-underline block mt-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Telia_Scandinavia_Logo.svg"
          className="w-20 ml-4"
        />
      </a>
      <div className="flex-1 mt-8">
        <div className="mt-6">
          <NavLink
            to="/"
            exact
            activeClassName={activeLinkClasses}
            className={linkClasses}
          >
            <div>
              <FontAwesomeIcon icon={faHome} className="mr-4" />{t("sideMenuHome")}
            </div>
          </NavLink>
          <NavLink
            to="/messages"
            activeClassName={activeLinkClasses}
            className={linkClasses}
          >
            <div>
              <FontAwesomeIcon icon={faEnvelope} className="mr-4" />{t("sideMenuMessages")}
            </div>
          </NavLink>
          <NavLink
            to="/shop"
            activeClassName={activeLinkClasses}
            className={linkClasses}
          >
            <div>
              <FontAwesomeIcon icon={faTruck} className="mr-4" />{t("sideMenuShop")}
            </div>
          </NavLink>
          <NavLink
            to="/reports"
            activeClassName={activeLinkClasses}
            className={linkClasses}
          >
            <div>
              <FontAwesomeIcon icon={faFileAlt} className="mr-4" />{t("sideMenuReports")}
            </div>
          </NavLink>
          <NavLink
            to="/settings"
            activeClassName={activeLinkClasses}
            className={linkClasses}
          >
            <div>
              <FontAwesomeIcon icon={faCog} className="mr-4" />{t("sideMenuSettings")}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;