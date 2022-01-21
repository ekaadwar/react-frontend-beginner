import React from "react";

const defaultContent = () => {
  return <p>Text</p>;
};

function ButtonCircle({
  content = defaultContent,
  size = 20,
  color = "gray",
  colorLevel = 300,
  colorFocus = "gray",
  colorFocusLevel = 500,
}) {
  return (
    <button
      className={`focus:outline-none h-${size} w-${size} bg-${color}-${colorLevel} focus:bg-${colorFocus}-${colorFocusLevel} rounded-full`}
    >
      {content()}
    </button>
  );
}

export default ButtonCircle;
