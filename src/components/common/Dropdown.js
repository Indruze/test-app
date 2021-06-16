import React, { useEffect, useState } from "react";

function Dropdown({
  className = "",
  header = null,
  options,
  align = "right",
  ...newProps
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true)
  }, []);

  let classes = `${className} absolute bg-white px-1 py-2 w-64 mt-4 shadow-2xl rounded-sm max-w-screen origin-center`;

  if (align === "left") classes += " left-0";
  else classes += " right-0";

  const createOption = option => {
    const OptionTag = option.link ? "a" : "div"
    return (
      <OptionTag
        key={option.id}
        className="flex items-center px-3 py-3 cursor-pointer hover:bg-gray-200 font-light text-sm focus:outline-none"
        href={option.link}
      >
        {option.icon ? <div className="mr-2">{option.icon}</div> : null}
        {option.text}
      </OptionTag>
    )
  };

  const Items = options.map((o, index) => {

    return createOption(o)
  });


    return (
      <div className={classes} {...newProps}>
        {Items}
      </div>
    )
};

export default Dropdown