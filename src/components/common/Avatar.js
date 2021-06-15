import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Avatar = ({
    icon = null,
    initials = null,
    ...newProps
}) => {
    let classes = "relative rounded-full bg-gray-100 flex items-center justify-center w-9 h-9";

    return (
        <div className={classes} {...newProps}>
            {icon ? (
                <FontAwesomeIcon icon={icon} />
            ) : (
                <div>{initials}</div>
            )}
        </div>
    )
};

export default Avatar;
                