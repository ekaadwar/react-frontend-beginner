import React from "react";
import { Link } from "react-router-dom";

const defaultContent = () => {
  return <p>Text</p>;
};

function ButtonCircle({
  content = defaultContent,
  to = "#",
  size = 10,
  primary = false,
  secondary = false,
  rounded = "xl",
  bg = "bg-gray-400",
  bgHover = "",
  bgFocus = "",
  textColor = "",
  textHoverColor = "",
  textFocusColor = "",
}) {
  if (primary === true) {
    bg = "bg-yellow-400";
    bgHover = "bg-yellow-200";
  }

  if (secondary === true) {
    bg = "bg-yellow-900";
    bgHover = "bg-yellow-800";
  }

  return (
    <button
      className={`focus:outline-none w-${size} h-${size} ${bg} hover:${bgHover} focus:${bgFocus} rounded-${rounded} ${textColor} hover:${textHoverColor} focus:${textFocusColor} overflow-hidden`}
    >
      <Link to={to}>{content()}</Link>
    </button>
  );
}

export default ButtonCircle;
