import React from "react"

const Button = ({
  className = "",
  content = "button",
  link,
  type = "filled",
  icon,
  iconPosition = "left",
  submit,
  full,
  disabled,
  ...newProps
}) => {
  let classes = `${className} inline-block rounded-full font-light border border-solid cursor-pointer text-center py-3 px-6 focus:outline-none`;

  if (type === "filled" || type ==="submit")
    classes +=
      " text-white bg-purple-600 hover:text-purple-600 hover:bg-transparent hover:border-purple-600";
  else if (type === "clean")
    classes +=
      " text-purple-600 bg-transparent border-purple-600 hover:text-white hover:bg-purple-600 ";
  
  if (full) classes += " w-full";

  if (icon) {
    if (iconPosition === "left")
      content = (
        <>
          {React.cloneElement(icon, { className: "mr-2" })}
          {content}
        </>
      )
    else if (iconPosition === "right")
      content = (
        <>
          {content}
          {React.cloneElement(icon, { className: "ml-2" })}
        </>
      )
  };

  let ButtonTag = link ? "a" : "button";

  return (
    <ButtonTag
      href={link}
      className={classes}
      type={submit ? "submit" : ""}
      disabled={disabled ? "disabled" : ""}
      {...newProps}
    >
      {content}
    </ButtonTag>
  )
}

export default Button;