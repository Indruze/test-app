import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faBorderAll,
  faSignOutAlt,
  faUser,
  faEnvelope,
  faGripHorizontal,
} from "@fortawesome/free-solid-svg-icons";

import Sidebar from "../common/Sidebar";
import Avatar from "../common/Avatar";
import Dropdown from "../common/Dropdown";

import Overview from "../pages/Overview";
import Messages from "../pages/Messages";
import Shop from "../pages/Shop";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

const Main = () => {
    const [t] = useTranslation();
    let [openDropdown, setOpenDropdown] = useState(false);


    return (
        <div className="flex bg-gray-50">
            <Sidebar />
            <div className="flex-1 min-h-screen">
                <div className="w-full py-3 px-6 bg-gray-50 flex justify-end items-center">
                    <div className="flex items-center">
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
                                            icon: <FontAwesomeIcon icon={faUser} />,
                                            text: t("dropdownAppsTitel"),
                                        },
                                        {
                                            id: "2",
                                            link: "/settings",
                                            icon: <FontAwesomeIcon icon={faBorderAll} />,
                                            text: t("dropdownStorageTitel"),
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
                    <Route exact path="/shop" component={Shop} />
                    <Route path="/reports" component={Reports} />
                    <Route exact path="/settings" component={Settings} />
                </Switch>
            </div>
        </div>
    )
}

export default Main;