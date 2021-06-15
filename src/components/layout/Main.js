import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faCog,
  faSignOutAlt,
  faHeart,
  faEnvelope,
  faGripHorizontal,
} from "@fortawesome/free-solid-svg-icons";

import Sidebar from "../common/Sidebar";
import Avatar from "../common/Avatar";
import Dropdown from "../common/Dropdown";

import Overview from "../pages/Overview";
import Messages from "../pages/Messages";

const Main = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="flex bg-gray-50">
        <Sidebar />
        <div className="flex-1 min-h-screen">
            <div className="w-full py-3 px-6 bg-gray-50 flex justify-end items-center">
                <div className="flex items-center">
                    <FontAwesomeIcon
                        icon={faQuestionCircle}
                        className="text-xl cursor-pointer ml-4"
                    />
                    <div className="relative mx-4">
                        <Avatar
                            icon={faGripHorizontal}
                            onClick={() => setOpenDropdown(!openDropdown)}
                        />
                        {openDropdown && (
                            <Dropdown
                                header={<h2 className="font-bold">John Stevens</h2>}
                                options={[
                                    {
                                        id: "1",
                                        link: "/likes",
                                        icon: <FontAwesomeIcon icon={faHeart} />,
                                        text: "My Likes",
                                    },
                                    {
                                        id: "2",
                                        link: "/settings",
                                        icon: <FontAwesomeIcon icon={faCog} />,
                                        text: "Settings",
                                    },
                                    {
                                        id: "3",
                                        link: "/logout",
                                        icon: <FontAwesomeIcon icon={faSignOutAlt} />,
                                        text: "Logout",
                                    },
                                ]}
                            />
                        )}
                    </div>
                    <Avatar
                        initials="AM"
                    />
                </div>
            </div>
            <Switch>
                <Route exact path="/" component={Overview} />
                <Route path="/messages" component={Messages} />
            </Switch>
        </div>
    </div>
  )
}

export default Main;