import React from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";

const SimpleCard = ({
    className = "",
    title,
    subtitle,
    text,
    button,
    ...newProps
}) => {
    const [t] = useTranslation();
    let classes = `${className} border rounded-lg border-gray-100 bg-white mb-7 p-3`
    return (
        <div className={classes}>
            <div className="p-6">
                {title && <h3>{title}</h3>}
                {subtitle && <h5>{subtitle}</h5>}
                {text && <p className={`${title && "mt-2"}`}>{text}</p>}
                {button && 
                    <Button className="mt-4" type="clean" full content={t("helpFieldButtonTitle")} />
                }
            </div>
        </div>
    )
}

export default SimpleCard