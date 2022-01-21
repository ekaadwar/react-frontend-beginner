import React from "react";

function contentDefault() {
  return <p>Text</p>;
}

function ButtonSquare({
  content = contentDefault,
  primary = false,
  secondary = false,
  py = 0,
  px = 0,
  w = "auto",
  rounded = "none",
  bg = "bg-gray-400",
  bgHover = "",
  bgFocus = "",
  textColor = "",
  textHoverColor = "",
  textFocusColor = "",
}) {
  if (primary === true) {
    py = 3;
    w = "full";
    bg = "bg-yellow-400";
    bgHover = "bg-yellow-200";
    rounded = "xl";
  }

  if (secondary === true) {
    py = 3;
    w = "full";
    bg = "bg-yellow-900";
    bgHover = "bg-yellow-800";
    rounded = "xl";
  }

  return (
    <button
      className={`focus:outline-none py-${py} px-${px} w-${w} ${bg} hover:${bgHover} focus:${bgFocus} rounded-${rounded} ${textColor} hover:${textHoverColor} focus:${textFocusColor}`}
    >
      {content()}
    </button>
  );
}

export default ButtonSquare;
