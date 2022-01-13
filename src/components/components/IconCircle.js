import React from "react";
import { FaReact } from "react-icons/fa";

function IconDefault() {
  return <FaReact color="#6A4029" />;
}

function IconCircle({ icon = IconDefault() }) {
  return (
    <div className="flex justify-center items-center h-8 w-8 bg-yellow-500 rounded-full">
      {icon}
    </div>
  );
}

export default IconCircle;
